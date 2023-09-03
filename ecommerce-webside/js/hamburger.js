const bar = document.querySelector('#bar');
const nav = document.querySelector('#navbar')
const closeBtn = document.querySelector('#close');

export const openMenu = bar.addEventListener('click', (e) => {
    nav.classList.add('active');    
})

export const closeMenu = closeBtn.addEventListener('click', (e) => {
    nav.classList.remove('active');   
})

