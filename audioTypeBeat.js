//Play C major chords by typing!

const audioContext = new AudioContext();

const buffer = audioContext.createBuffer(1,audioContext.sampleRate*1,audioContext.sampleRate);

const channelData = buffer.getChannelData(0);

//Notes and chords
const notes = [
    {name : "C", frequency : 261.63},   //0
    {name : "C#", frequency : 277.18},  //1
    {name : "D", frequency : 293.66},   //2
    {name : "D#", frequency : 311.13},  //3
    {name : "E", frequency : 329.63},   //4
    {name : "F", frequency : 349.23},   //5
    {name : "F#", frequency : 369.99},  //6
    {name : "G", frequency : 392.0},    //7
    {name : "G#", frequency : 415.3},   //8
    {name : "A", frequency : 440.0},    //9
    {name : "A#", frequency : 466.16},  //10
    {name : "B", frequency : 493.88},   //11
    {name : "C2", frequency : 523.25},  //12
    {name : "C#2", frequency : 554.36}, //13
    {name : "D2", frequency : 587.33},  //14
    {name : "D#2", frequency : 622.25}, //15
    {name : "E2", frequency : 659.25},  //16
    {name : "F2", frequency : 698.45},  //17
    {name : "F#2", frequency : 739.99}, //18
    {name : "G2", frequency : 783.99},  //19
    {name : "G#2", frequency : 830.61}, //20
    {name : "A2", frequency : 880.0}    //21
];

const chords = [
    {name : "C maj", note1 : notes[0], note2 : notes[4], note3 : notes[7], note4 : notes[0]},
    {name : "C maj 7", note1 : notes[0], note2 : notes[4], note3 : notes[7], note4 : notes[11]},
    {name : "D min", note1 : notes[2], note2 : notes[5], note3 : notes[9], note4 : notes[2]},
    {name : "D min 7", note1 : notes[2], note2 : notes[5], note3 : notes[9], note4 : notes[12]},
    {name : "E min", note1 : notes[4], note2 : notes[7], note3 : notes[11], note4 : notes[4]},
    {name : "E min 7", note1 : notes[4], note2 : notes[7], note3 : notes[11], note4 : notes[14]},
    {name : "F maj", note1 : notes[5], note2 : notes[9], note3 : notes[12], note4 : notes[5]},
    {name : "F maj 7", note1 : notes[5], note2 : notes[9], note3 : notes[12], note4 : notes[16]},
    {name : "G maj", note1 : notes[7], note2 : notes[11], note3 : notes[14], note4 : notes[7]},
    {name : "G maj 7", note1 : notes[7], note2 : notes[11], note3 : notes[14], note4 : notes[17]},
    {name : "A min", note1 : notes[9], note2 : notes[12], note3 : notes[16], note4 : notes[9]},
    {name : "A min 7", note1 : notes[9], note2 : notes[12], note3 : notes[16], note4 : notes[19]},
    {name : "B dim", note1 : notes[11], note2 : notes[14], note3 : notes[17], note4 : notes[11]},
    {name : "B min 7", note1 : notes[11], note2 : notes[14], note3 : notes[17], note4 : notes[21]},
 ];

const primaryGainControl = audioContext.createGain();
primaryGainControl.gain.setValueAtTime(0.05,0);
primaryGainControl.connect(audioContext.destination);

//Play music
function playChord(name){
    for(let i = 0; i < chords.length; i++){
        if(chords[i].name === name){
            const noteOscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const oscillator3 = audioContext.createOscillator();
            const oscillator4 = audioContext.createOscillator();

            noteOscillator1.type = "triangle";
            oscillator2.type = "triangle";
            oscillator3.type = "triangle";
            noteOscillator1.frequency.setValueAtTime(chords[i].note1.frequency, audioContext.currentTime);
            oscillator2.frequency.setValueAtTime(chords[i].note2.frequency, audioContext.currentTime);
            oscillator3.frequency.setValueAtTime(chords[i].note3.frequency, audioContext.currentTime);
            oscillator4.frequency.setValueAtTime(chords[i].note4.frequency, audioContext.currentTime);


            const attackTime = 0.2;
            const decayTime = 0.3;
            const sustainLvl = 0.7;
            const releaseTime = 0.2;

            const now = audioContext.currentTime;
            const noteGain = audioContext.createGain();
            noteGain.gain.setValueAtTime(0,0);
            noteGain.gain.linearRampToValueAtTime(1, now + attackTime);
            noteGain.gain.linearRampToValueAtTime(sustainLvl, now + attackTime + decayTime);
            noteGain.gain.setValueAtTime(sustainLvl, now + 1 - releaseTime);
            noteGain.gain.linearRampToValueAtTime(0, now + 1); 


            
            noteOscillator1.connect(noteGain);
            oscillator2.connect(noteGain);
            oscillator3.connect(noteGain);
            oscillator4.connect(noteGain);
            noteGain.connect(primaryGainControl);
            noteOscillator1.start();
            oscillator2.start();
            oscillator3.start();
            oscillator4.start();


            noteOscillator1.stop(audioContext.currentTime + 1);
            oscillator2.stop(audioContext.currentTime + 1);
            oscillator3.stop(audioContext.currentTime + 1);
            oscillator4.stop(audioContext.currentTime + 1);


        }
    }
 }

//Respond to keydown
window.onkeydown = function(key){
    if(key.keyCode === 65 || key.keyCode === 90){
        playChord("C maj");
        testChords(1);  
    }
    else if(key.keyCode === 66 || key.keyCode === 89){
        playChord("C maj 7");
        testChords(1);
    }
    else if(key.keyCode === 67 || key.keyCode === 88){
        playChord("D min");
        testChords(2);
    }
    else if(key.keyCode === 68 || key.keyCode === 87){
        playChord("D min 7");
        testChords(2);
    }
    else if(key.keyCode === 69 || key.keyCode === 86){
        playChord("E min");
        testChords(3);
    }
    else if(key.keyCode === 70 || key.keyCode === 85){
        playChord("E min 7");
        testChords(3);
    }
    else if(key.keyCode === 71 || key.keyCode === 84){
        playChord("F maj");
        testChords(4);
    }
    else if(key.keyCode === 72 || key.keyCode === 83){
        playChord("F maj 7");
        testChords(4);
    }
    else if(key.keyCode === 73 || key.keyCode === 82){
        playChord("G maj");
        testChords(5);
    }
    else if(key.keyCode === 74 || key.keyCode === 81){
        playChord("G maj 7");
        testChords(5);
    }
    else if(key.keyCode === 75 || key.keyCode === 80){
        playChord("A min");
        testChords(6);
    }
    else if(key.keyCode === 76 || key.keyCode === 79){
        playChord("A min 7");
        testChords(6);
    }
    else if(key.keyCode === 77){
        playChord("B dim");
        testChords(7);
    }
    else{
        playChord("B min 7");
        testChords(7);
    }
};
