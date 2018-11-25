
function addEvent(obj, type, fn) {
    if (obj.addEventListener) {
      obj.addEventListener(type, fn, false);
    } else if (obj.attachEvent) {
      obj.attachEvent("on" + type, fn);
    }
 }
 
 addEvent(document.getElementById('sofa'), 'ended', function() {
     document.getElementById('play').style.display = 'block';
     document.getElementById('pause').style.display = 'none';
 });
 
 function togglePlay(state) {
     var audio = document.getElementById('sofa'),
         allaudio = document.getElementsByTagName('audio'),
         play  = document.getElementById('play'),
         pause = document.getElementById('pause');
 


     if (state == 'play') {
         audio.play();
         play.style.display = 'none';
         pause.style.display = 'block';
     }else{
         for(i=0; i<allaudio.length; i++) allaudio[i].pause();
         play.style.display = 'block';
         pause.style.display = 'none';
     }
 }

//  document.getElementById('pause').onclick = function() {
//     var sounds = document.getElementsByTagName('audio');
//     for(i=0; i<sounds.length; i++) sounds[i].pause();

// };

// var sofa = document.getElementById("sofa");

// function setup() {
//   sofa = loadSound ("audio/new/sofa.mp3", loaded);
//   sofa.setVolume(0.8);
// } 

// function loaded() {
//   sofa.play();
// }


// var coffee = document.getElementById("coffee");
// var btn = document.getElementById("play_button");

// function play() {
//   if (coffee.paused) {
//     coffee.play();
//     btn.style.background = "url(play.svg) no-repeat"
//   }

//   else {
//     coffee.pause();
//     btn.style.background ) "url(pause.svg) no-repeat"
//   }
// }

// function mutePage() {
//   var elems = document.querySelectorAll("audio");

//   [].forEach.call(elems, function(elem) { muteMe(elem); });
// }

// var coffee_sound = new Audio ();
// coffee_sound.src = "audio/coffee.m4a";

// function playSound(soundobj) {
//   var thissound=document.getElementById(soundobj);
//   thissound.play();
// }

// function StopSound(soundobj) {
//   var thissound=document.getElementById(soundobj);
//   thissound.pause();
//   thissound.currentTime = 0;
// }

// var item = document.getElementById("img");
// var music = new Audio('audio/coffee.m4a');

// item.addEventListener("mouseover", playMusic, false);
// item.addEventListener("mouseout", stopMusic, false);

// function playMusic() {
//    music.play();
// }

// function stopMusic() {
//    music.stop();
// }