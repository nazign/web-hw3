// part A
const title = ["인터스텔라", "아이언맨", "마션", "겨울왕국", "레미제라블", "극장판 치이카와: 인어 섬의 비밀", "암살자(들)", "실낙원", "타짜: 벨제붑의 노래", "클레이페이스"];

const rating = [8.4, 7.7, 7.7, 7.2, 7.2, 7.2, 7.4, 7.2, 8.0, 7.0, 7.5];

const years = [2014, 2008, 2015, 2013, 2012, 2026, 2026, 2026, 2026, 2026];

const audiences = [0, 0, 0, 0, 0, 2248126, 3374510, 104874, 1999477, 77153];

// 관객 수 100만 이상이 없을 때 const audiences = [0, 0, 0, 0, 0, 0, 0, 104874, 0, 77153];

// Part B : 영화 객체 10건(Part A와 같은 순서)
const movies = [
    {
        title: "인터스텔라", year: 2014, date: "2014-11-04", rating: 8.4,
        audience: 0, poster: "/gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg", type: "mine", rank: null, overview: "세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다."
    },
    {
        title: "아이언맨", year: 2008, date: "2008-04-30", rating: 7.7,
        audience: 0, poster: "/ziReGUV3xURsWmcmsn2GOunPc0L.jpg", type: "mine", rank: null, overview: "천재적인 두뇌로 만들어낸 강철 슈트로 세상을 뒤집어 놓다."
    },
    {
        title: "마션", year: 2015, date: "2015-09-30", rating: 7.7,
        audience: 0, poster: "/uH8q40cjMAjrRHyPJMbQwAIJATb.jpg", type: "mine", rank: null, overview: "화성에서 조난 당한 남자의 처절한 생존 이야기가 펼쳐진다."
    },
    {
        title: "겨울왕국", year: 2013, date: "2013-11-20", rating: 7.2,
        audience: 0, poster: "/lYceQKe3EsYn7VdDXGTy7dSwBLp.jpg", type: "mine", rank: null, overview: "서로가 최고의 친구였던 자매 엘사와 안나,  하지만 언니 엘사에게는 하나뿐인 동생에게조차 말 못할 비밀이 있다."
    },
    {
        title: "레미제라블", year: 2012, date: "2012-12-18", rating: 7.2,
        audience: 0, poster: "/hSjWT9LsyNJ9H3d1Tn9Hx02hnQD.jpg", type: "mine", rank: null, overview: "빵을 훔친 죄로 시작된 감옥살이를 마친 장발장은 세상의 냉대 속에서 한 성직자의 자비를 통해 다른 삶을 결심한다."
    },

    {
        title: "극장판 치이카와: 인어 섬의 비밀", year: 2026, date: "2026-09-30", rating: 7.4,
        audience: 2248126, poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg", type: "boxoffice", rank: 1, overview: "어느 날, 광장에서 쉬고 있던 치이카와와 가르마 앞에 얼굴에 전단지를 붙인 토끼가 나타난다."
    },
    {
        title: "암살자(들)", year: 2026, date: "2026-09-23", rating: 7.2,
        audience: 3374510, poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg", type: "boxoffice", rank: 2, overview: "1974년 8월 15일, 제29회 광복절 경축식. 전 국민이 지켜보는 생중계 현장에서 영부인이 저격당하는 초유의 사태가 발생한다."
    },
    {
        title: "실낙원", year: 2026, date: "2026-10-21", rating: 8.0,
        audience: 104874, poster: "/wkm9BQLok7U2KihcCspCa663Qse.jpg", type: "boxoffice", rank: 3, overview: "9년 전 캠핑스쿨 버스 실종 사건으로 아들을 잃은 류소영은 '낙원의 아이들'이라는 AI 프로그램을 통해 어린 시절의 아들과 만나며 하루하루를 버텨낸다."
    },
    {
        title: "타짜: 벨제붑의 노래", year: 2026, date: "2026-09-30", rating: 7.0,
        audience: 1999477, poster: "/ueigb5zra1tj6FTK9yhh2P33P9B.jpg", type: "boxoffice", rank: 4, overview: "타고난 끗발로 사람의 마음을 사로잡는 장태영과 천부적인 머리와 노력으로 스스로를 증명하는 박태영."
    },
    {
        title: "클레이페이스", year: 2026, date: "2026-09-30", rating: 7.5,
        audience: 77153, poster: "/LSGpoSAlitss0KOvVakkeUToZo.jpg", type: "boxoffice", rank: 5, overview: "할리우드의 주연 배우로 유명 영화제 수상을 눈 앞에 두며 꿈을 이루기 직전인 ‘맷 헤이건’."
    },
];