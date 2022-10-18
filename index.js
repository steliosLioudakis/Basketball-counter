// ----------- Home -----------------//

let countH = 0;
let countHome = document.getElementById("score-home");


function plusOne() {
    countH += 1;
    countHome.innerText = countH;
}

plusOne();


function plusTwo() {
    countH += 2;
    countHome.innerText = countH;
}

plusTwo();

function plusThree() {
    countH += 3;
    countHome.innerText = countH;
}

plusThree();

function resetHome() {
    countH = 0;
    countHome.innerText = countH;
}

resetHome();

//--------------------Guest-------------------//

let countG = 0;
let countGuest = document.getElementById("score-guest");

function plusOneGuest() {
    countG += 1;
    countGuest.innerText = countG;
}

plusOneGuest();

function plusTwoGuest() {
    countG += 2;
    countGuest.innerText = countG;
}

plusTwoGuest();

function plusThreeGuest() {
    countG += 3;
    countGuest.innerText = countG;
}

plusThreeGuest();


function resetGuest() {
    countG = 0;
    countGuest.innerText = countG;
}

resetGuest();

//------------------Period----------------------//

let countP = 0;
let countPeriod = document.getElementById("period");

function period() {
    countP += 1;
    countPeriod.innerText = countP;
}

period();

function resetPeriod() {
    countP = 1;
    countPeriod.innerText = countP;
}

resetPeriod();

//------------------- Horn-----------------------//

function horn() {
    let audio = new Audio('Horn.mp3');
    audio.play();
}

horn();


// let shadows = document.getElementById("score-home");

// function shadow() {
//     shadows.style.boxShadow = "0px 0px 13px 5px red";
// }


