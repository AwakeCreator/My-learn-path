// document.getElementById("plaja").onclick = function () {
//     document.getElementById("aiAles").innerHTML = "Ai ales prima imagine"
// }

// document.getElementById("padure").onclick = function () {
//     document.getElementById("imagine2").innerHTML = "Ai ales a doua imagine"
// }

// document.getElementById("libertate").onclick = function () {
//     document.getElementById("imagine3").innerHTML = "Ce adidasi crezi ca sunt aceia?"
// }
 
document.getElementById("apusul").onclick = function () {
    document.getElementById("Orologio").innerHTML = "Oare cat este ceasul ?" ;
}

function $ (i) {
    if (i < 10) {
    i = "0" + i;
    }
    return i 
}

function clock() {
    d = new Date();
    ora = $(d.getHours());
    minuti = $(d.getMinutes());
    document.getElementById("ceas").innerHTML = ora + ":" + minuti;
}





  



    







