// $(document).ready(function(){
//     $("#Calculate").click(function(){
//         $("#box2").slideDown("bounce-down", { times: 0.1}, "slow");
//     });
// });

function calculateLove() {
    let fname = document.getElementById("fname").value.trim();
    let sname = document.getElementById("sname").value.trim();

    let loveScore = calculateScore(fname, sname);

    let resultText = "💖  " + loveScore + "%";

    document.getElementById("resut").innerHTML = resultText;
    document.getElementById("box2").style.display = "block";
}

function calculateScore(fname, sname) {
    let totalLetters = (fname.length + sname.length);
    let commonLetters = 0;

    for (let i = 0; i < fname.length; i++) {
        for (let j = 0; j < sname.length; j++) {
            if (fname[i].toLowerCase() === sname[j].toLowerCase()) {
                commonLetters++;
                break;
            }
        }
    }

    let loveScore = Math.round((commonLetters / totalLetters) * 100);
    return loveScore;
}
