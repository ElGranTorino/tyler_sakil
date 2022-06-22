class Scroller {
    constructor(options){
        this.speed = options.speed;
        this.easing = options.easing;
        this.$container = document.querySelector(options.container);
        this.offset = {
            x: 0,
            y: 0,
        },
        this.maximumOffset = document.body.getBoundingClientRect().bottom - window.innerHeight;

        this.bodyHide();
    }
    init(){
        //
    }
    bodyHide(){
        document.body.style.overflow = 'hidden'
    }

    moveContainer(offset){
        //
    }
}
class EventHandlers {
    constructor(){
        this.step = options.step;

        window.addEventListener('wheel',(e) => onScroll(e))
        window.addEventListener('keydown', (e) => onKeyDown(e))
    }

    onWheel(){
        //
    }
    onKeyDown(){
        //
    }
    onTouchMove(){
        //
    }
}


       
        const offset = {
            x: 0,
            y: 0,
        };
        
        const onScroll = (e) => {
            const cont = document.getElementById('scroll-container'),
                  min = 0,
                  max = document.body.getBoundingClientRect().bottom - window.innerHeight;
            cont.style.transition = 'all 1s ease-out'
            console.log(min, max, offset.y)
            if(e.deltaY < 0){
                if(offset.y < 0){
                    offset.y += 100
                    cont.style.transform = `translateY(${offset.y}px)`;
                }
            } else {
                if(-offset.y <= max){
                    offset.y -= 100
                    cont.style.transform = `translateY(${offset.y}px)`;
                }
            }
        }
        const onKeyDown = (e) => {
            const cont = document.getElementById('scroll-container'),
                  min = 0,
                  max = document.body.getBoundingClientRect().bottom - window.innerHeight;
            cont.style.transition = 'all 1s ease-out'
            console.log(min, max, offset.y)
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