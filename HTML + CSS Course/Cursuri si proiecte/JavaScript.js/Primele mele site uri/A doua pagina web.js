function schimbaCuloarea(document) {
    var culoareaCurenta = document.style.backgroundColor;
    if(culoareaCurenta == "red") {
        document.style.backgroundColor = "green";
     } else {
        document.style.backgroundColor = "red";
    }
}
