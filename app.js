const liked = JSON.parse(localStorage.getItem("liked") || "[]");
const dialog = document.getElementById("detail");

// sortBy : 영화 배열, 키 이름, 내림차순 여부 ⇒ 정렬한 새 배열(원본은 그대로)
function sortBy(list, key, desc) {
    const copy = [...list];
    copy.sort((a, b) => {
        const sign = desc ? -1 : 1;
        if (typeof a[key] === "string") return a[key].localeCompare(b[key]) * sign;
        return (a[key] - b[key]) * sign;
    });
    
    return copy;
}
// search(list, keyword) : 배열, 문자열 ⇒ 새 배열
function search(list, keyword) {
    let listDic = [];
    keyword = keyword.trim().toLowerCase()
    for (const m of list) {
        if (m.title.toLowerCase().includes(keyword)) {
            listDic.push({ ...m });
        }
    }
    return listDic;
}

// posterUrl(path, size) : 포스터 경로, 크기 ⇒ TMDB 이미지 주소(문자열)
function posterUrl(path, size) { return "https://image.tmdb.org/t/p/" + size + path; }

// openDetail : 제목 -> 상세 대화상자를 채워서 열기(반환값 없음)
function openDetail(title) {
    const movie = movies.find(m => m.title === title);
    if (!movie) return;
    document.getElementById("detailBody").innerHTML = `
    <img src="${posterUrl(movie.poster, "w500")}" alt=${movie.title} 포스터">
    <h2>${movie.title}</h2>
    <p>개봉일 ${movie.date}, 평점 ${movie.rating}</p>
    <p>${movie.overview}</p>`;
    dialog.showModal();
}

// renderCards : 영화 배열 ⇒ 보드에 카드 생성(반환값 없음)
function renderCards(list) {
    const board = document.querySelector(".board");
    board.innerHTML = "";
    for (const m of list) {
        const card = document.createElement("article");
        card.className = "card";
        if (m.rating >= 8) { card.classList.add("hot"); }
        card.setAttribute("data-type", m.type);
        card.setAttribute("data-title", m.title);
        let rank = "";
        if (m.type === "boxoffice") {
            rank = `<span class="rank">${m.rank}</span>`;
        }
        let poster = `<img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title} 포스터">`;
        if (m.poster === null) {
            card.classList.add("no-poster");
            poster = `<div class="poster-fallback">${m.title[0]}</div>`;
        }
        let heart = "like";
        if (liked.includes(m.title)) {
            heart = "like liked";
        }
        card.innerHTML = `
 ${poster}
 ${rank}
 <span class="badge">${m.rating}</span>
 <div class="info">
    <h3>${m.title}</h3>
    <p class="year">${m.year}</p>
    <button class = "${heart}" type="button">♥</button>
    </div>`;
        board.appendChild(card);
    }
    document.getElementById("count").textContent = list.length + "편";
    document.getElementById("likeCount").textContent = liked.length;
    if (list.length === 0) {
        board.classList.add("is-empty");
    } else {
        board.classList.remove("is-empty");
    }
}

renderCards(movies);

// getview : 없음 -> 검색어로 거른 뒤 선택 상자 기준으로 정렬한 새 배열
function getView() {
    const keyword = document.getElementById("q").value;
    const type = document.querySelector(`input[name="type"]:checked`).value;
    const key = document.getElementById("sort").value;
    let list = search(movies, keyword);
    if (type !== "all") {
        list = list.filter(m => m.type === type);
    }
    return sortBy(list, key, key !== "title");
}

// refresh : 없음 -> 지금 조건으로 다시 그리기(반환값 없음)
function refresh() {
    renderCards(getView());
}

// 찜한 제목 배열을 브라우저에 저장하고 불러오기
function saveLiked() {
    localStorage.setItem("liked", JSON.stringify(liked));
}

// ===== 이벤트 : 랜더 함수 밖, 맨 아래 한 곳에서 한 번씩 =====
document.getElementById("q").addEventListener("input", refresh);
document.getElementById("sort").addEventListener("change", refresh);
document.getElementById("typeFilter").addEventListener("change", refresh);
refresh();

document.querySelector(".board").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const title = card.getAttribute("data-title");
    if (e.target.closest(".like")) {
        const i = liked.indexOf(title);
        if (i === -1) {
            liked.push(title);
        } else {
            liked.splice(i, 1);
        }
        saveLiked();
        refresh();
        return;
    }
    openDetail(title);
});
document.getElementById("closeDetail").addEventListener("click", () =>{
    dialog.close();
});
