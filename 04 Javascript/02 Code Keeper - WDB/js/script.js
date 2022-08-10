//Consts
const elMaxScore = document.querySelector(".scoreKeeper__to");
const elBtnP1 = document.querySelector(".scoreKeeper_btnP1");
const elBtnP2 = document.querySelector(".scoreKeeper_btnP2");
const elBtnReset = document.querySelector(".scoreKeeper_btnReset");
const scoreP1 = document.querySelector(".scoreKeeper_scoreP1")
const scoreP2 = document.querySelector(".scoreKeeper_scoreP2")

// Initialisation
let p1 = p2 = 0;
let maxScore = +elMaxScore.value;

//Detect change in maxsscore
elMaxScore.addEventListener("change", (e) => maxScore = +elMaxScore.value)

//click player 1 of player 2
function btnClickP(e) {
    //Disable max score select
    if (!elMaxScore.disabled) elMaxScore.disabled = true;
    //add score
    switch (e.target.id) {
        case "btnP1":
            p1++
            scoreP1.textContent = p1;
            break;
        case "btnP2":
            p2++
            scoreP2.textContent = p2;
            break;
    }
    // Check if game is over
    if (p1 === maxScore || p2 === maxScore) {
        //Game is over
        //Disable player buttons
        elBtnP1.disabled = elBtnP2.disabled = true;
        //Adjust score
        scoreP1.classList.add(p1 > p2 ? "text-success" : "text-danger")
        scoreP2.classList.add(p1 > p2 ? "text-danger" : "text-success")
    }
}

elBtnP1.addEventListener("click", btnClickP);
elBtnP2.addEventListener("click", btnClickP);

//Click reset
elBtnReset.addEventListener("click", function (e) {
    //Remove colors
    scoreP1.classList.remove("text-success", "text-danger")
    scoreP2.classList.remove("text-success", "text-danger")
    //Set scores to 0
    p1 = p2 = scoreP1.textContent = scoreP2.textContent = 0;
    //Enable maxScore
    //Enable player buttons
    elMaxScore.disabled = elBtnP1.disabled = elBtnP2.disabled = false;
})