//Determine what genre that beat was like!
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>



chord1 = 0;
chord2 = 0;
chord3 = 0;
chord4 = 0;
genre = "empty";

//Hardcoded dataset because I am running out of time :,/
d1 = ["6","4","1","5","Alternative"];
d2 = ["4","4","1","5","Catchy"];
d3 = ["1","1","1","1","Didgeridoo"];
d4 = ["1","6","4","5","Dreadful"];
d5 = ["1","6","4","5","Dreadful"];
d6 = ["1","6","2","4","Endless"];
d7 = ["1","3","4","6","Energetic"];
d8 = ["1","5","1","4","Folk"];
d9 = ["1","6","1","4","Folk"];
d10 = ["6","5","4","3","Flamenco"];
d11 = ["6","5","6","5","Flamenco"];
d12 = ["1","4","3","6","Grunge"];
d13 = ["2","5","1","6","Jazz"];
d14 = ["1","4","5","4","Love"];
d15 = ["1","4","1","5","Memories"];
d16 = ["1","5","6","4","Pop"];
d17 = ["1","6","3","7","Pop"];
d18 = ["4","1","4","5","Rebellious"];
d19 = ["1","4","5","5","Sad"];
d20 = ["1","5","4","4","Sad"];
d21 = ["1","4","5","4","Sad"];
d22 = ["5","4","1","1","Sweet"];
d23 = ["1","4","1","4","Simple"];
d24 = ["1","5","5","1","Simple"];
d25 = ["1","4","1","4","Wildside"];
d26 = ["1","1","4","6","Wistful"];
d27 = ["1","1","5","7","Moody"];
d28 = ["2","1","7","6","Moody"];

let data = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28];

function testGenre(ch1, ch2, ch3, ch4){
    for(let i = 0; i < data.length; i ++){
        if(ch1 === parseInt(data[i][0]) && ch2 === parseInt(data[i][1]) && ch3 === parseInt(data[i][2]) && ch4 === parseInt(data[i][3])){
            genre = data[i][4];
            ch1 = 0;
            ch2 = 0;
            ch3 = 0;
            ch4 = 0;
            return genre;
            }
        }
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
        genre = testGenre(chord1, chord2, chord3, chord4);
        if(genre != undefined) {
            document.querySelector("title").innerHTML = genre;
            
            document.getElementById("bigTitle").innerHTML = genre + " type beat";
            document.querySelector("h3").innerHTML = "Sequence recognized!";
            document.querySelector("h4").style.visibility = "visible";
            document.querySelector("h4").innerHTML = "You discovered the " + genre + " melody";
            chord1 = 0;
            chord2 = 0;
            chord3 = 0;
            chord4 = 0;
        }
        else if (genre == undefined) {
            document.querySelector("title").innerHTML = "Try another beat!";
            document.querySelector("h3").innerHTML = "Try another beat!";
        }
        else {
            document.querySelector("title").innerHTML = "processing...";
            document.querySelector("h3").innerHTML = "processing...";
        }
    }
    else {
        chord1 = chord2;
        chord2 = chord3;
        chord3 = chord4;
        chord4 = lastChord;
        
        genre = testGenre(chord1, chord2, chord3, chord4);
        if(genre != undefined) {
            document.querySelector("title").innerHTML = genre;
            document.getElementById("bigTitle").innerHTML = genre + " type beat";
            document.querySelector("h3").innerHTML = "Sequence recognized!";
            document.querySelector("h4").style.visibility = "visible";
            document.querySelector("h4").innerHTML = "You discovered the " + genre + " melody";

            chord1 = 0;
            chord2 = 0;
            chord3 = 0;
            chord4 = 0;
        }
        else if (genre == undefined) {
            document.querySelector("title").innerHTML = "Try another beat!";
            document.querySelector("h3").innerHTML = "Try another beat!";

        }
        else {
            document.querySelector("title").innerHTML = "processing...";
            document.querySelector("h3").innerHTML = "processing...";
        }

    }

    

}


window.onkeypress = function(wey){
    if(wey.keyCode >= 0 || wey.keyCode <= 100){
        document.querySelector("h2").style.visibility = "hidden";
        document.querySelector("h3").style.visibility = "visible";
    }
}