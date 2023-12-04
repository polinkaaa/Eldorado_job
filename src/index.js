import 'normalize.css'
import './styles/main.scss'

const links = document.querySelectorAll(".link_serf");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
    document.getElementById("modal").style.top = "-400px";
}

// Menu
const tests = document.querySelectorAll(".header_menu");
for (const test of tests) {
    test.addEventListener("click", openModal);
}
function openModal() {
    document.getElementById("modal").style.top = "0px";
}

const testss = document.querySelectorAll(".modal__menu_close");
for (const tests of testss) {
    tests.addEventListener("click", closeModal);
}
function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}
