import {domInhit} from './modules/dom.js'

domInhit();











let midEat = document.querySelector('.eat');
midEat.addEventListener('mouseenter',() => {
    document.body.classList = 'hover-eat';
} );
midEat.addEventListener('mouseleave', () =>{
    document.body.classList = '';
});

let midDrink = document.querySelector('.drink');
midDrink.addEventListener('mouseenter', () => {
    document.body.classList = 'hover-drink';
});
midDrink.addEventListener('mouseleave', () => {
    document.body.classList = '';
});

let midVisit = document.querySelector('.visit');
midVisit.addEventListener('mouseenter', () => {
    document.body.classList = 'hover-visit';
});
midVisit.addEventListener('mouseleave', () => {
    document.body.classList = '';
});