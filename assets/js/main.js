/*=============== CHANGE BACKGROUND HEADER ===============*/
const disabledKeys = ["c", "C", "x", "J", "u", "I"];


const showAlert = e => {
    e.preventDefault();
    return alert("این قابلیت توسط ادمین وبسایت مرتضی «کینگ» غیر فعال شده است!!!!!!");
}

document.addEventListener("contextmenu", showAlert);

document.addEventListener("contextmenu", e => {
    if ((e.ctrlKey && disabledKeys.includes(e.key)) ||
        e.key === "F12") {
        showAlert(e);
    }
});

/*=============== SWIPER POPULAR ===============*/
// To disable F12 options
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}

/*=============== VALUE ACCORDION ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
