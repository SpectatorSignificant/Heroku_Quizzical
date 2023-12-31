const logo = document.getElementById("logo");
const displayBox = document.getElementById("display-box");

let quizName, maxScore;

quizInfo = JSON.parse(quizInfo);
console.log(quizInfo);

pastScores = JSON.parse(pastScores);
console.log(pastScores);

function findQuiz(quizCode, quizInfo){
    quizInfo.forEach((e) => {
        if (e.quizcode == quizCode){
            console.log([e.quizname, e.max_score]);
            return [e.quizname, e.max_score];
        }
    }
)};

let html = "";
// html += `<div class='options' >`;
pastScores.forEach((element, index) => {
    // console.log(element.quizcode);
    // console.log(findQuiz(element.quizcode, quizInfo));
    // quizName = findQuiz(element.quizcode, quizInfo).quizname;
    // maxScore = findQuiz(element.quizcode, quizInfo).max_score;
    quizInfo.forEach((e) => {
        if (e.quizcode == element.quizcode){
            quizName = e.quizname;
            maxScore = e.max_score;
        }
    });
    html += `<div class='quiz'>`;
    html += `<h2 class='quizname'>${quizName}</h2>`;
    html += `<div class='score'>${element.score} / ${maxScore} points</div>`
    html += `</div>`;
});

displayBox.innerHTML = html;
