//Global Variables cube positie onthouden
let cubeX = 0;
let cubeY = 0;

//Voor de visualisatie van de cube.
var xAngle = 0, yAngle = 0;

//De data van de json beschikbaar als global variable
var emotionsData;

//De data van elke emotie individueel opgedeeld en beschikbaar als global variable
var happy;
var sad;
var angry;
var jelous;
var zen;
var confused;

//De audio library van elke emotie beschikbaar als global variable
var happyvoice;
var sadvoice;
var angryvoice;
var jelousvoice;
var zenvoice;
var confused;

//Een variabele bedoeld om de actieve emotie door te geven.
var activeEmotion = happyvoice;

//Deze methode haalt alle data op uit de json en passeert de data door naar een aantal global variables.
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

//luister naar een keydown event als een van de keys overeenkomt met de code dan wordt de code erbinnen uitgevoert
document.addEventListener('keydown', function (a) {
	//Pijltje naar links
    if (a.which == 37) {
    	leftArrowPressed();
    	yAngle -= 90;
    }
    //pijltje naar rechts
     if (a.which == 39) {
    	rightArrowPressed();
    	yAngle += 90;
    }
    //pijltje naar boven
     if (a.which == 38) {
    	upArrowPressed();
    	xAngle += 90;
    }
    //pijltje naar onder
     if (a.which == 40) {
    	downArrowPressed();
    	xAngle -= 90;
    };
    document.getElementById('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);
//Deze functie haalt -1 af van de cubeX variable als hij 0 heeft berijkt gaat hij weer terug naar 3. Vervolgens wordt de get emotion functie uitgevoert.
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
//Deze functie voegt +1 toe aan de cubeX als hij 3 heeft berijkt gaat hij weer terug naar 0. Vervolgens wordt de get emotion functie uitgevoert.
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
//Deze functie voegt +1 toe aan de cubeY als hij 3 heeft berijkt gaat hij weer terug naar 0. Vervolgens wordt de get emotion functie uitgevoert.
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
//Deze functie haalt -1 af van de cubeX variable als hij 0 heeft berijkt gaat hij weer terug naar 3. Vervolgens wordt de get emotion functie uitgevoert.
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

//Timer voor het afspelen van audio. Bleek niet helemaal goed te werken dus heb hem geschrapt.

// function voiceTimer()
// {
// 	var timer = Math.floor(Math.random()*(15000-4000+1)+4000);
// 	setTimeout(playVoice(),timer);
// 	console.log(timer);
// }
//

//De get emotion functie kijkt naar value van de cubeX en cubeY en voert vervolgens de bijbehorende if statement uit.
function getEmotion() {
	//Veranderd de image naar die van de happy emotie. Ook voert hij de getvoice funtie uit en geeft de happyvoice array mee. Daarnaast veranderd hij ook de status van de actieve emotie deze funtie is deels geschrapt.
    if (cubeX == 0 && cubeY == 0) {
        image = document.getElementById('faceDisp');
        image.src = happy.face;
        getVoice(happyvoice);
        activeEmotion = happyvoice;
    }
    //Veranderd de image naar die van de zen emotie. Ook voert hij de getvoice funtie uit en geeft de zenvoice array mee. Daarnaast veranderd hij ook de status van de actieve emotie deze funtie is deels geschrapt.
    if (cubeX == 1 && cubeY == 0) {
        image = document.getElementById('faceDisp');
        image.src = zen.face;
        getVoice(zenvoice);
        activeEmotion = zenvoice;
    }
     //Veranderd de image naar die van de jelous emotie. Ook voert hij de getvoice funtie uit en geeft de jelousvoice array mee. Daarnaast veranderd hij ook de status van de actieve emotie deze funtie is deels geschrapt.
    if (cubeX == 2 && cubeY == 0) {
        image = document.getElementById('faceDisp');
        image.src = jelous.face;
        getVoice(jelousvoice);
        activeEmotion = jelousvoice;
    }
     //Veranderd de image naar die van de confused emotie. Ook voert hij de getvoice funtie uit en geeft de confusedvoice array mee. Daarnaast veranderd hij ook de status van de actieve emotie deze funtie is deels geschrapt.
    if (cubeX == 3 && cubeY == 0) {
        image = document.getElementById('faceDisp');
        image.src = confused.face;
        getVoice(confusedvoice);
        activeEmotion = confusedvoice;
    }
     //Veranderd de image naar die van de sad emotie. Ook voert hij de getvoice funtie uit en geeft de sadvoice array mee. Daarnaast veranderd hij ook de status van de actieve emotie deze funtie is deels geschrapt.
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
	 //Veranderd de image naar die van de sad emotie. Ook voert hij de getvoice funtie uit en geeft de sadvoice array mee. Daarnaast veranderd hij ook de status van de actieve emotie deze funtie is deels geschrapt.
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

//pak van de array die is binnengekomen een random voice uit de array en stuur deze door naar playvoice.
function getVoice(emotionvoice) {
    var rand = emotionvoice[Math.floor(Math.random() * emotionvoice.length)];
    playVoice(rand);
}

//speel de audio af die is binnen gekomen.
function playVoice(selectedvoice) {
    var voice = new Audio(selectedvoice);
    voice.play();
}


// var sound;
// var amp;
// var canvas;
// var button;

// function toggleSound() {
//     if (sound.isPlaying()) {
//         sound.pause();
//     } else {
//         sound.play();
//     }
// }

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

// function preload() {
//     sound = loadSound("audio/sad/sad1.mp3");
// }

// function setup() {
//     button = createButton('toggle');
//     button.mousePressed(toggleSound);
//     canvas = createCanvas(windowWidth, windowHeight);
//     canvas.position(0, 0);
//     canvas.style('z-index', '-2');
//     amp = new p5.Amplitude();
// }

// function draw() {
//     // put drawing code here
//     background(175);
//     var vol = amp.getLevel();
//     ellipse(width / 2, height / 2, vol * 500);
//     // currentVoice = playVoice(selectedvoice);
//     // if (activeEmotion == currentVoice) {

//     // } 	
//     //   function playVoice(selectedvoice) 
//     // {
//     // 	sound = loadSound(selectedvoice);			
//     // 	sound.play();
//     // }
// }