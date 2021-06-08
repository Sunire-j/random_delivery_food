let target = document.querySelector("#dynamic");
let random_id = null;


window.onload = function () {
    document.getElementById("go").onclick = function () {
        dynamic(start_random());
    }
    document.getElementById("stop").onclick = function () {
        clearTimeout();
        stopdynamic(start_random());
    }
}


function resetTyping() {
    target.textContent = "";
    dynamic(start_random());
}

function start_random() {
    let stringArr = ["부대찌개", "치킨", "피자", "족발", "보쌈", "라면", "김치찜", "냉면", "돈까스",
        "햄버거", "갈비찜", "떡볶이", "곱창", "닭도리탕", "오리훈제", "제육볶음", "순대", "국밥", "쫄면", "닭발"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    console.log(selectString);
    return selectString;
}

function stopdynamic(selectStringa) {
    target.textContent = selectStringa;
    clearInterval(random_id);
}


function dynamic(selectString) {
    target.textContent = selectString;
    random_id = setTimeout(resetTyping, 25);
}