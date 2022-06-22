export default class Cursor {
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
    }
    move(e){
        [this.pos.x, this.pos.y] = [e.clientX, e.clientY];

        this.$el.style.left = this.pos.x + 'px'
        this.$el.style.top = this.pos.y + 'px'
        this.$el.style.transition = 'all .05s linear'
    }

    interact(type){
        if(!type) {
            this.$el.style = '';
            this.$el.style.left = this.pos.x + 'px';
            this.$el.style.top = this.pos.y + 'px';
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
        }
    }

    
}