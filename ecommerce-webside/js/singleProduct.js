import { openMenu, closeMenu } from "./hamburger.js";

const mainImg = document.getElementById('mainImg')
const smallImg = document.querySelectorAll('.small-img-col')

const showImg = (e) => {
    mainImg.src = e.target.src
}


smallImg.forEach(img => {
    img.addEventListener('click',showImg)
})