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

function posterUrl(path, size) { return "https://image.tmdb.org/t/p/" + size + path; }

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
        card.innerHTML = `
 ${poster}
 ${rank}
 <span class="badge">${m.rating}</span>
 <div class="info">
    <h3>${m.title}</h3>
    <p class="year">${m.year}</p>
    <button class = "like" type="button">♥</button>
 </div>`;
        board.appendChild(card);

    }
    document.getElementById("count").textContent = list.length + "편";
    updateLikeCount();
    if (list.length === 0) {
        board.classList.add("is-empty");
    } else {
        board.classList.remove("is-empty");
    }
}
renderCards(movies);