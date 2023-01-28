//Determine what genre that beat was like!
let chord1 = 0;
let chord2 = 0;
let chord3 = 0;
let chord4 = 0;
let boolz = true;
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
    }


}


window.onkeypress = function(wey){
    if(wey.keyCode >= 0 || wey.keyCode <= 100){
        document.querySelector("h2").style.visibility = "hidden";
    }
}