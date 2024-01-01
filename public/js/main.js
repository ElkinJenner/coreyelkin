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

//Menu Responsive
let menu_icono = document.getElementById("menu_icono");
let navbar_center = document.getElementById("navbar_center");
let count_nav = 0;
menu_icono.addEventListener('click', function () {
    if (count_nav == 0) {
        navbar_center.classList.remove("navegation_responsive");
        menu_icono.classList.add("icono_close");
        count_nav = 1;
    }
    else {
        navbar_center.classList.add("navegation_responsive");
        menu_icono.classList.remove("icono_close");
        count_nav = 0;
    }
});