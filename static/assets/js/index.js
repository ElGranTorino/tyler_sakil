import Cursor from "/js/Cursor.js"

const run = () => {
    const cursor = new Cursor({
        $el: '.cursor',
        w:15,
        h:15,
        bg: '#1e1e1e',
        color: '#f8f8f8',
    })

}
const animateEntrance = () => {
    
    const bgLines = document.querySelectorAll('.bg__line'),
      nameChars = document.querySelectorAll('.hero__name-char');
    bgLines.forEach((line) => {
        line.classList.add('active');
    });
    nameChars.forEach((char) => {
        char.classList.add('active');
    });
    gsap.to('.nav__about-text', {opacity: 1, duration: 1, delay: 1.2, y: 0, easing: 'linear'})
    gsap.to('.nav__brand .brand__text', {opacity: 1, duration: 1, delay: 2.5, y: 0})
    gsap.to('.nav__contact-text', {opacity: 1, duration: 1, delay: 1.2, y: 0, easing: 'linear'})
    gsap.to('.hero__profession-text', {opacity: 1, duration: 1, delay: 0.8, y: 0, easing: 'ease-out'})
    gsap.to('.hero__navigation-portfolio', {opacity: 1, duration: 1, delay: 0.6, y: 0, easing: 'ease-out'})
}


animateEntrance()
const offset = {
    x: 0,
    y: 0,
};
document.body.style.overflow = 'hidden'
const onScroll = (e) => {
    const cont = document.getElementById('scroll-container'),
          min = 0,
          max = document.body.getBoundingClientRect().bottom - window.innerHeight;
    cont.style.transition = 'all 1.3s ease-out'
    if(e.deltaY < 0){
        if(offset.y < 0){
            offset.y += 120
            cont.style.transform = `translateY(${offset.y}px)`;
        }
    } else {
        if(-offset.y <= max){
            offset.y -= 120
            cont.style.transform = `translateY(${offset.y}px)`;
        }
    }
}
const onKeyDown = (e) => {
    const cont = document.getElementById('scroll-container'),
          min = 0,
          max = document.body.getBoundingClientRect().bottom - window.innerHeight;
    cont.style.transition = 'all 1.3s ease-out'
    if(e.deltaY < 0){
        if(offset.y < 0){
            offset.y += 25
            cont.style.transform = `translateY(${offset.y}px)`;
        }
    } else {
        if(-offset.y <= max){
            offset.y -= 50
            cont.style.transform = `translateY(${offset.y}px)`;
        }
    }
}
window.addEventListener('wheel',(e) => onScroll(e))
window.addEventListener('keydown', (e) => onKeyDown(e))

run();