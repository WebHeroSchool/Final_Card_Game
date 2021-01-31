let NumberOfCards = 0;
let level = document.querySelectorAll('a.menu_level');
let header = document.querySelector('header');
let menu = document.querySelector('article.menu');
let startGame = document.querySelector('a.buttom_text');
let desk = document.querySelector('article.desk');
let k = 0;

const getNumberOfCards = function(i, event) {
  if (level[i].classList.contains('menu_light')) {
    NumberOfCards = 3;       
  } else { 
    if (level[i].classList.contains('menu_medium')) {
      NumberOfCards = 6; 
    } else {
      NumberOfCards = 10; 
    }
  }
  return (NumberOfCards);
}

const getDesk = function() {
  if (NumberOfCards === 3) {
    let deskLight = document.createElement('section');
    deskLight.className = 'desk_light';
    desk.prepend(deskLight);
  } else {
    if (NumberOfCards === 6) {
      let deskMedium = document.createElement('section');
      deskMedium.className = 'desk_medium';
      desk.prepend(deskMedium);
    } else {
      if (NumberOfCards === 10) {
        let deskHard = document.createElement('section');
        deskHard.className = 'desk_hard';
        desk.prepend(deskHard);
      } else {
        return alert('Выберите уровень сложности');
        }
      }
    }

  for (let i = 0; i < NumberOfCards; i++) {
  let card = document.createElement('img');
  card.className = 'desk_card';
  card.src = 'images/desk_card.png';
  if (NumberOfCards === 3) {
    let deskFirst = document.querySelector('section.desk_light');
    deskFirst.prepend(card);
  } else {
    if (NumberOfCards === 6) {
    let deskSecond = document.querySelector('section.desk_medium');
    deskSecond.prepend(card);
    } else {
      let deskThird = document.querySelector('section.desk_hard');
      card.classList.add('desk_hard_card');
      deskThird.prepend(card);
      }
    }
  }
  header.classList.add('hidden');
  menu.classList.add('hidden');
  desk.classList.remove('hidden');
  let pictureOfCard = document.querySelectorAll('img.desk_card');
  
  for (i = 0; i < pictureOfCard.length; i++) {
    pictureOfCard[i].addEventListener('mouseover', toMove.bind(null, i, pictureOfCard));
    pictureOfCard[i].addEventListener('mouseout', toMoveBack.bind(null, i, pictureOfCard));
    pictureOfCard[i].addEventListener('click', toTransform.bind(null, i, pictureOfCard));
  }
}

const toMove = function(i, pictureOfCard, event) {
  pictureOfCard[i].classList.add('moved');
}

const toMoveBack = function(i, pictureOfCard, event) {
  pictureOfCard[i].classList.remove('moved');
}

const toTransform = function(i, pictureOfCard, event) {
  if (k === 0) {
    total = Math.round(Math.random()*2);
    switch (total) {
      case 1:
        pictureOfCard[i].classList.add('transformed');
        pictureOfCard[i].src = 'images/bug.png';
        break
      case 2:
        pictureOfCard[i].classList.add('transformed');
        pictureOfCard[i].src = 'images/game_over.png';
        break
    };
    k = 1;
  } else {
    header.classList.remove('hidden');
    menu.classList.remove('hidden');
    desk.classList.add('hidden');
    desk.firstChild.remove();
    k = 0;
    NumberOfCards = 0;
  }
}

for (let i = 0; i < level.length; i++ ) {
  level[i].addEventListener('click', getNumberOfCards.bind(null, i));
}

startGame.addEventListener('click', getDesk);