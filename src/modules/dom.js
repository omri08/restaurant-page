// creating the DOM
function domInhit(firstShow) {
document.body.classList = '';


let container = document.querySelector('.container');
let textLogo = document.createElement('h1');
textLogo.innerText = 'L o r e m';
container.appendChild(textLogo);



let centerText = document.createElement('div');
centerText.classList.add('center-text');


let eatText = document.createElement('p');
eatText.innerText ='EAT';
eatText.classList.add('eat');
centerText.appendChild(eatText);

let drinkText = document.createElement('p');
drinkText.innerText= 'DRINK';
drinkText.classList.add('drink');
centerText.appendChild(drinkText);

let visitText = document.createElement('p');
visitText.innerText ='VISIT';
visitText.classList.add('visit')
centerText.appendChild(visitText);

container.appendChild(centerText);

};

export {domInhit};