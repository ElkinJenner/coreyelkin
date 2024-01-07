//Play Music
let music = new Audio();
let musicIndex = 0;
let musicList = [
    "../music/SheSnake.mp3",
    "../music/ShotgunLove.mp3",
    "../music/FireUpTheNight.mp3",
    // Agrega más URLs de pistas aquí
];
music.src = musicList[musicIndex];
music.volume = 0.6;
music.loop = false;

let action_music = document.getElementById("action_music");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let status_p = false;

let back_m = document.getElementById("back_m");
let next_m = document.getElementById("next_m");

action_music.addEventListener('click', function(){
    if (status_p == false){
        music.play();
        play.classList.add("hidden");
        pause.classList.remove("hidden");
        status_p = true;
            // Evento de clic para cambiar y reproducir la siguiente pista desde el botón "next"
             next_m.addEventListener('click', function () {
                // Cambiar a la siguiente pista
                musicIndex = (musicIndex + 1) % musicList.length;
                music.src = musicList[musicIndex];

                // Reproducir la nueva pista
                music.play();
                play.classList.add("hidden");
                pause.classList.remove("hidden");
                status_p = true;
            });
            // Evento de clic para cambiar y reproducir la anterior pista desde el botón "next"
               back_m.addEventListener('click', function () {
                // Cambiar a la siguiente pista
                musicIndex = (musicIndex - 1) % musicList.length;
                music.src = musicList[musicIndex];

                // Reproducir la nueva pista
                music.play();
                play.classList.add("hidden");
                pause.classList.remove("hidden");
                status_p = true;
            });
    }
    else{
        music.pause();
        play.classList.remove("hidden");
        pause.classList.add("hidden");
        status_p = false;
    }
 });