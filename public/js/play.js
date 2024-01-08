//Clase
class Cancion {
    //Constructor con atributos
    constructor(nombre, dir, artista, url) {
        this.nombre = nombre;
        this.dir = dir;
        this.artista = artista;
        this.url = url;
    }
}
// Lista de canciones
let musicList = [
    new Cancion("Man On Fire", "../music/ManOnFire.mp3", "Oh The Larceny", "https://lastfm.freetls.fastly.net/i/u/ar0/ebb9d545ee304185d33dee81acb19c35.jpg"),
    new Cancion("My Time", "../music/MyTime.mp3", "Fabolous", "https://i.scdn.co/image/ab67616d0000b2731c8e4d574a3b74d1aecececa"),
    new Cancion("I Get Off", "../music/IGetOff.mp3", "Halestorm", "https://upload.wikimedia.org/wikipedia/en/1/13/Halestorm_-_Halestorm.png"),
    new Cancion("Today I Saw The Whole World", "../music/TodayISawTheWholeWorld.mp3", "Pierce The Veil", "https://pbs.twimg.com/media/CyY_BPTUcAAGz17.jpg"),
    new Cancion("Look After You", "../music/LookAfterYou.mp3", "The Fray", "../music/HowtoSaveaLife.jpg"),
    new Cancion("Nervous", "../music/Nervous.mp3", "The Neighbourhood", "../music/TheNeighbourhood.jpg"),
    new Cancion("Rosa Pastel", "../music/Belanova.mp3", "Belanova", "https://i1.sndcdn.com/artworks-CXfEEGx0cLWPM6OU-QYGoQw-t500x500.jpg"),
    new Cancion("Human", "../music/Human.mp3", "ANNISOKAY", "../music/ArisingEmpire.jpg"),
    new Cancion("Lo vencio", "../music/LoVencio.mp3", "Alas Blancas", "../music/AlasBlancas.jpg"),
    new Cancion("The She-Snake Shuffle", "../music/SheSnake.mp3", "Sunhawk", "../music/SheSnackShuffle.jpg"),
    new Cancion("Fire Up The Night", "../music/FireUpTheNight.mp3", "New Medicine", "../music/LifeLikeThis.jpg"),
    new Cancion("Shotgun Love", "../music/ShotgunLove.mp3", "Rockstars on Mars", "../music/DregsofHumanity.jpg"),
    // Agrega más canciones según sea necesario
];

//Play Music
let music = new Audio();
let musicIndex = 0;
let cancionActual = musicList[musicIndex]; //Recoge la lista de canciones con sus atributos desde el indice 0


let nombre = cancionActual.nombre;
let artista = cancionActual.artista;
let url = cancionActual.url;

//music.src = musicList[musicIndex];
music.src = cancionActual.dir;
music.volume = 0.6;
music.loop = false;

let action_music = document.getElementById("action_music");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let status_p = false;

let back_m = document.getElementById("back_m");
let next_m = document.getElementById("next_m");
let volumeControl = document.getElementById("volume");

action_music.addEventListener('click', function(){
    if (status_p == false){
        music.play();
        play.classList.add("hidden");
        pause.classList.remove("hidden");
        status_p = true;
            // Evento de clic para cambiar y reproducir la siguiente pista desde el botón "next"
            next_m.addEventListener('click', function () {
                // Incrementar el índice para la siguiente canción
                musicIndex = (musicIndex + 1) % musicList.length;
                // Obtener la nueva canción
                cancionActual = musicList[musicIndex];
                // Cambiar la dirección de la nueva canción
                music.src = cancionActual.dir;
                
                // Acceder a todos los atributos de la nueva canción
                nombre = cancionActual.nombre;
                artista = cancionActual.artista;
                url = cancionActual.url;

                // Capturar Cancion siguiente
                let song_index = document.querySelector('#song');
                song_index.innerHTML = `
                <div class="song"><p><strong>${nombre}</strong></p></div>
                <div class="artist"><small>${artista}</small></div>
                `;
                // Capturar Fotografia del Album Siguiente
                let album_index = document.querySelector('#album');
                album_index.innerHTML = `
                <img class="img60" src="${url}">
                `;
                
                // Reproducir la nueva pista
                music.play();
                play.classList.add("hidden");
                pause.classList.remove("hidden");
                status_p = true;
            });
            // Evento de clic para cambiar y reproducir la anterior pista desde el botón "next"
            back_m.addEventListener('click', function () {
                // Incrementar el índice para la siguiente canción
                musicIndex = (musicIndex - 1) % musicList.length;
                // Obtener la nueva canción
                cancionActual = musicList[musicIndex];
                // Cambiar la dirección de la nueva canción
                music.src = cancionActual.dir;

                // Acceder a todos los atributos de la nueva canción
                nombre = cancionActual.nombre;
                artista = cancionActual.artista;
                url = cancionActual.url;

                // Capturar Cancion siguiente
                let song_index = document.querySelector('#song');
                song_index.innerHTML = `
                <div class="song"><p><strong>${nombre}</strong></p></div>
                <small>${artista}</small>
                `;
                // Capturar Fotografia del Album Siguiente
                let album_index = document.querySelector('#album');
                album_index.innerHTML = `
                <img class="img60" src="${url}">
                `;

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
// Capturar Texto de Cancion Actual
let song_index = document.querySelector('#song');
song_index.innerHTML = `
<div class="song"><p><strong>${cancionActual.nombre}</strong></p></div>
<div class="artist"><small>${cancionActual.artista}</small></div>
`;
// Capturar Fotografia del Album de cancion
let album_index = document.querySelector('#album');
album_index.innerHTML = `
<img class="img60" src="${cancionActual.url}">
`;

// Evento de cambio en el control de volumen
volumeControl.addEventListener('input', function () {
    music.volume = volumeControl.value;
});
// Controlar el evento de finalización para cambiar y reproducir la siguiente pista
music.addEventListener('ended', function () {
    musicIndex = (musicIndex + 1) % musicList.length;
    // Obtener la nueva canción
    cancionActual = musicList[musicIndex];
    music.src = cancionActual.dir;
    music.play();
    // Acceder a todos los atributos de la nueva canción
    nombre = cancionActual.nombre;
    artista = cancionActual.artista;
    url = cancionActual.url;

    // Capturar Cancion siguiente
    let song_index = document.querySelector('#song');
    song_index.innerHTML = `
        <div class="song"><p><strong>${nombre}</strong></p></div>
        <small>${artista}</small>
    `;
    // Capturar Fotografia del Album Siguiente
    let album_index = document.querySelector('#album');
    album_index.innerHTML = `
    <img class="img60" src="${url}">
    `;
});