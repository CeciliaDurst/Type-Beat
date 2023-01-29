//Determine what genre that beat was like!
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.2/papaparse.min.js" integrity="sha512-SGWgwwRA8xZgEoKiex3UubkSkV1zSE1BS6O4pXcaxcNtUlQsOmOmhVnDwIvqGRfEmuz83tIGL13cXMZn6upPyg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
chord1 = 0;
chord2 = 0;
chord3 = 0;
chord4 = 0;
genre = "empty";

function testGenre(ch1, ch2, ch3, ch4){

}

function testChords(lastChord){
    if(chord1 === 0){
        chord1 = lastChord;
    }
    else if(chord2 === 0){
        chord2 = lastChord;
    }
    else if(chord3 === 0){
        chord3 = lastChord;
    }
    else if(chord4 === 0){
        chord4 = lastChord;
    }
    else {
        chord1 = chord2;
        chord2 = chord3;
        chord3 = chord4;
        chord4 = lastChord;
        testGenre(chord1, chord2, chord3, chord4);
    }


}


window.onkeypress = function(wey){
    if(wey.keyCode >= 0 || wey.keyCode <= 100){
        document.querySelector("h2").style.visibility = "hidden";

    }
}