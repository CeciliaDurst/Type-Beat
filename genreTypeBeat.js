//Determine what genre that beat was like!
chord1 = 0;
chord2 = 0;
chord3 = 0;
chord4 = 0;

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