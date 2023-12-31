//Switch Modo
let switch_c = document.getElementById("switch");
let body = document.getElementById("body");
let light_mode = document.getElementById("light_mode");
let dark_mode = document.getElementById("dark_mode");
let count_switch = 0;

switch_c.addEventListener('click', function () {
    if (count_switch == 0) {
        dark_mode.classList.remove("hidden");
        light_mode.classList.add("hidden");
        body.classList.add("dark_mode");
        body.classList.remove("light_mode");
        count_switch = 1;
    }
    else {
        dark_mode.classList.add("hidden");
        light_mode.classList.remove("hidden");
        body.classList.add("light_mode");
        body.classList.remove("dark_mode");
        count_switch = 0;
    }
});