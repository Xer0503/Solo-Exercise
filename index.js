let DisplayScore = document.getElementById("score-home")
let DisplayScore1 = document.getElementById("score-guest")

let homeScores = 0
let guestScore = 0
function One()
{
    homeScores++
    DisplayScore.innerText = homeScores
}
function Two()
{
    homeScores+=2
    DisplayScore.innerText = homeScores
}
function Three()
{
    homeScores+=3
    DisplayScore.innerText = homeScores
}

function OneG()
{
    guestScore++
    DisplayScore1.innerText = guestScore
}
function TwoG()
{
    guestScore+=2
    DisplayScore1.innerText = guestScore
}
function ThreeG()
{
    guestScore+=3
    DisplayScore1.innerText = guestScore
}

function reset()
{
    homeScores = 0
    DisplayScore.innerText = homeScores
}
function resetG()
{
    guestScore = 0
    DisplayScore1.innerText = guestScore
}