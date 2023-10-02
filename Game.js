class Hero {
    image;
    top;
    left;
    size;

    constructor(image, top, left,size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getHeroElement = function() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';

    }

    moveRight() {
        this.left += 100;
    }
    moveLeft() {
        this.left -= 100;
    }

    moveBottom() {
        this.top += 100;
    }
    moveTop() {
        this.top -= 100;
    }


}
let hero = new Hero('pikachu.png',30,20,50)
function start(){
    if(hero.left < window.innerWidth - hero.size && hero.top <= 30){
        hero.moveRight();
    }else if (hero.top < window.innerHeight - hero.size && hero.left > 20) {
        hero.moveBottom();
    }else if (hero.left > 20) {
        hero.moveLeft();
    }else if (hero.top > 30) {
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement()

    setTimeout(start,500)

}
start()













// function Hero(image, top, left, size,right,top,bottom){
//     this.image = image;
//     this.top = top;
//     this.left = left;
//     this.size = size;
//     this.right = right;
//     this.bottom = bottom;
//
//     this.getHeroElement = function(){
//         return '<img width="'+ this.size + '"' +
//             ' height="'+ this.size + '"' +
//             ' src="' + this.image +'"' +
//             ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
//     }
//
//     this.moveRight = function(){
//         this.left += 5;
//         console.log('ok: ' + this.left);
//     }
//
//     this.moveLeft = function(){
//         this.right -= 10;
//         console.log('ok: ' + this.right);
//     }
//
// }
//
// var hero = new Hero('pikachu.png', 50, 50,100,100);
//
// function start(){
//     if(hero.left < window.innerWidth - hero.size){
//         hero.moveRight();
//         requestAnimationFrame(start)
//
//     }
//     document.getElementById('game').innerHTML = hero.getHeroElement();
//
// }
//
//
// start();