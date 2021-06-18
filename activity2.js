function back() {
    window.location = "activity_1.html";
}

function getScore()
{
    score = localStorage.getItem("score");
    document.getElementById("uptade").innerHTML = "<h1>Score: " + score +"</h1>";       }