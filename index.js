let homeScore = 0;
let guestScore = 0;


let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let btnHome1 = document.getElementById("btn-home1");
let btnHome2 = document.getElementById("btn-home2");
let btnHome3 = document.getElementById("btn-home3");
let btnGuest1 = document.getElementById("btn-guest1");
let btnGuest2 = document.getElementById("btn-guest2");
let btnGuest3 = document.getElementById("btn-guest3");


btnHome1.addEventListener("click", function() {
    homeScore += 1;
    updateHomeScore();
});

btnHome2.addEventListener("click", function() {
    homeScore += 2;
    updateHomeScore();
});

btnHome3.addEventListener("click", function() {
    homeScore += 3;
    updateHomeScore();
});


btnGuest1.addEventListener("click", function() {
    guestScore += 1;
    updateGuestScore();
});

btnGuest2.addEventListener("click", function() {
    guestScore += 2;
    updateGuestScore();
});

btnGuest3.addEventListener("click", function() {
    guestScore += 3;
    updateGuestScore();
});


function updateHomeScore() {
    homeScoreEl.innerText = homeScore;
}

function updateGuestScore() {
    guestScoreEl.innerText = guestScore;
}
