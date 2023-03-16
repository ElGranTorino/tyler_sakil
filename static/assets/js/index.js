class Cursor {
    constructor(options){
        this.w = options.w;
        this.h = options.h;
        this.bg = options.bg || '#1e1e1e';
        this.color = options.color || '#fff';
        this.$el = document.querySelector(options.$el);
        this.pos = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };

        document.addEventListener('mousemove', (e) => this.move(e));
        document.addEventListener('click', () => this.interact('click'))

        const initCursorHandlers = () => {
            document.addEventListener('mouseover', (e) => {
                if(!e.target.classList.contains('js-cursor')) return;
                const cursorType = e.target.getAttribute('data-cursor-type');
                this.interact(cursorType);
            })
            document.addEventListener('mouseout', () => {
                this.interact();
            })
        };

        initCursorHandlers();
    }
    move(e){
        [this.pos.x, this.pos.y] = [e.clientX, e.clientY];

        this.$el.style.left = this.pos.x + 'px'
        this.$el.style.top = this.pos.y + 'px'
        this.$el.style.transition = 'all .05s linear'
    }
    resetStyles() {
        this.$el.style = '';
        this.$el.style.left = this.pos.x + 'px';
        this.$el.style.top = this.pos.y + 'px';
        this.$el.textContent = ''
    }
    interact(type){
        if(!type) {
            this.resetStyles()
            return
        }
        if(type === 'link'){
            this.$el.style.transition = 'all .2s linear'
            this.$el.style.opacity = '0'
            return
        }
        if(type === 'click'){
            this.$el.classList.add('click')

            setTimeout(() => {
                this.$el.classList.remove('click')
            }, 300)

            return
        }
        if(type === 'big'){
            this.$el.style.transition = 'all .4s linear'
            this.$el.style.width = '60px'
            this.$el.style.height = '60px'
            this.$el.style.opacity = '0.6'

            return
        }
        if(type === 'blend'){
            this.$el.style.transition = 'all .4s linear'
            this.$el.style.mixBlendMode = 'difference'
            this.$el.style.width = '150px'
            this.$el.style.height = '150px'
            this.$el.style.background = 'coral'
            this.$el.textContent = 'explore'
            this.$el.style.lineHeight = '150px'

            return
        }
    }

    
}

const run = () => {
    //const cursor = new Cursor({
     //   $el: '.cursor',
       // w:15,
        //h:15,
        //bg: '#1e1e1e',
        //color: '#f8f8f8',
    //})
    const cursor = new Cursor({
            w: '15px',
            h: '15px',
            bg: '#1e1e1e',
            color: '#fff'
        });
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

const animateAvatar = () => {
    gsap.to('.overlay-column.o1', {duration: 0.5, height: 0, delay: 3})
    gsap.to('.overlay-column.o2', {duration: 0.5, height: 0, delay: 3.3})
    gsap.to('.overlay-column.o3', {duration: 0.5, height: 0, delay: 3.6})
    gsap.to('.overlay-column.o4', {duration: 0.5, height: 0, delay: 3.9})
    gsap.to('.overlay-column.o5', {duration: 0.5, height: 0, delay: 4.2})
}

animateAvatar()
window.addEventListener('wheel',(e) => onScroll(e))
window.addEventListener('keydown', (e) => onKeyDown(e))

run();
