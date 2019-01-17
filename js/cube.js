//Global Variables cube positie onthouden
let cubeX = 0;
let cubeY = 0;
//De data van de json beschikbaar als global variable
var emotionsData;

//De data van elke emotie individueel opgedeeld en beschikbaar als global variable
var happy;
var sad;
var angry;
var jelous;
var zen;
var confused;

//De audio library van elke emotie beschikbaar als
var happyvoice;
var sadvoice;
var angryvoice;
var jelousvoice;
var zenvoice;
var confused;

var activeEmotion = happyvoice;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        emotionsData = JSON.parse(this.responseText);
        console.log(emotionsData);
        happy = emotionsData.emotions[1];
        sad = emotionsData.emotions[0];
        angry = emotionsData.emotions[2];
        jelous = emotionsData.emotions[3];
        zen = emotionsData.emotions[4];
        confused = emotionsData.emotions[5];

        happyvoice = happy.voice;
        sadvoice = sad.voice;
        angryvoice = angry.voice;
        zenvoice = zen.voice;
        jelousvoice = jelous.voice;
        confusedvoice = confused.voice;
        console.log(happy);
        console.log(happyvoice);
    }
};
xmlhttp.open("GET", "data/emotions.json", true);
xmlhttp.send();

document.addEventListener('keydown', function (a) {
    if (a.which == 37) {
    	leftArrowPressed();
    }
     if (a.which == 39) {
    	rightArrowPressed();
    }
     if (a.which == 38) {
    	upArrowPressed();
    }
     if (a.which == 40) {
    	downArrowPressed();
    }
}, false);

function leftArrowPressed() {
    if (cubeX <= 0) {
        cubeX = 3;
        getEmotion();
        console.log(cubeX);
    } else {
        cubeX--;
        getEmotion();
        console.log(cubeX);
    }
}

function rightArrowPressed() {
    if (cubeX >= 3) {
        cubeX = 0;
        getEmotion();
        console.log(cubeX);
    } else {
        cubeX++;
        getEmotion();
        console.log(cubeX);
    }
}

function upArrowPressed() {
    if (cubeY >= 3) {
        cubeY = 0;
        getEmotion();
        console.log(cubeY);
    } else {
        cubeY++;
        getEmotion();
        console.log(cubeY);
    }
}

function downArrowPressed() {
    if (cubeY <= 0) {
        cubeY = 3;
        getEmotion();
        console.log(cubeY);
    } else {
        cubeY--;
        getEmotion();
        console.log(cubeY);
    }
}

// function voiceTimer()
// {
// 	var timer = Math.floor(Math.random()*(15000-4000+1)+4000);
// 	setTimeout(playVoice(),timer);
// 	console.log(timer);
// }

function getEmotion() {
    if (cubeX == 0 && cubeY == 0) {
        image = document.getElementById('faceDisp');
        image.src = happy.face;
        getVoice(happyvoice);
        activeEmotion = happyvoice;
    }
    if (cubeX == 1 && cubeY == 0) {
        image = document.getElementById('faceDisp');
        image.src = zen.face;
        getVoice(zenvoice);
        activeEmotion = zenvoice;
    }
    if (cubeX == 2 && cubeY == 0) {
        image = document.getElementById('faceDisp');
        image.src = jelous.face;
        getVoice(jelousvoice);
        activeEmotion = jelousvoice;
    }
    if (cubeX == 3 && cubeY == 0) {
        image = document.getElementById('faceDisp');
        image.src = confused.face;
        getVoice(confusedvoice);
        activeEmotion = confusedvoice;
    }
    if (cubeX == 0 && cubeY == 1) {
        image = document.getElementById('faceDisp');
        image.src = sad.face;
        getVoice(sadvoice);
        activeEmotion = sadvoice;
    }
    if (cubeX == 1 && cubeY == 1) {
        image = document.getElementById('faceDisp');
        image.src = sad.face;
        getVoice(sadvoice);
        activeEmotion = sadvoice;
    }
    if (cubeX == 2 && cubeY == 1) {
        image = document.getElementById('faceDisp');
        image.src = angry.face;
        getVoice(angryvoice);
        activeEmotion = angryvoice;
    }
    if (cubeX == 3 && cubeY == 1) {
        image = document.getElementById('faceDisp');
        image.src = angry.face;
        getVoice(angryvoice);
        activeEmotion = angryvoice;
    }
    if (cubeX == 0 && cubeY == 2) {
        image = document.getElementById('faceDisp');
        image.src = jelous.face;
        getVoice(jelousvoice);
        activeEmotion = jelousvoice;
    }
    if (cubeX == 1 && cubeY == 2) {
        image = document.getElementById('faceDisp');
        image.src = zen.face;
        getVoice(zenvoice);
        activeEmotion = zenvoice;
    }
    if (cubeX == 2 && cubeY == 2) {
        image = document.getElementById('faceDisp');
        image.src = confused.face;
        getVoice(confusedvoice);
        activeEmotion = confusedvoice;
    }
    if (cubeX == 3 && cubeY == 2) {
        image = document.getElementById('faceDisp');
        image.src = zen.face;
        getVoice(zenvoice);
        activeEmotion = zenvoice;
    }
    if (cubeX == 0 && cubeY == 3) {
        image = document.getElementById('faceDisp');
        image.src = angry.face;
        getVoice(angryvoice);
        activeEmotion = angryvoice;
    }
    if (cubeX == 1 && cubeY == 3) {
        image = document.getElementById('faceDisp');
        image.src = angry.face;
        getVoice(angryvoice);
        activeEmotion = angryvoice;
    }
    if (cubeX == 2 && cubeY == 3) {
        image = document.getElementById('faceDisp');
        image.src = sad.face;
        getVoice(sadvoice);
        activeEmotion = sadvoice;
    }
    if (cubeX == 3 && cubeY == 3) {
        image = document.getElementById('faceDisp');
        image.src = sad.face;
        getVoice(sadvoice);
        activeEmotion = sadvoice;
    }
}

function playVoice(selectedvoice) {
    var voice = new Audio(selectedvoice);
    voice.play();
}

function getVoice(emotionvoice) {
    var rand = emotionvoice[Math.floor(Math.random() * emotionvoice.length)];
    playVoice(rand);
}

var sound;
var amp;
var canvas;
var button;

function toggleSound() {
    if (sound.isPlaying()) {
        sound.pause();
    } else {
        sound.play();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function preload() {
    sound = loadSound("audio/sad/sad1.mp3");
}

function setup() {
    button = createButton('toggle');
    button.mousePressed(toggleSound);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    amp = new p5.Amplitude();
}

function draw() {
    // put drawing code here
    background(175);
    var vol = amp.getLevel();
    ellipse(width / 2, height / 2, vol * 500);
    // currentVoice = playVoice(selectedvoice);
    // if (activeEmotion == currentVoice) {

    // } 	
    //   function playVoice(selectedvoice) 
    // {
    // 	sound = loadSound(selectedvoice);			
    // 	sound.play();
    // }
}