'use strict';

var timeInterval = 3000;
var id;
var prevId = null;
var clicked = false;


var picEl = document.getElementById('all-content');
picEl.addEventListener('click', handleClick);


function handleClick(event) {
  console.log('Event id: '+ event.target.id);

  if (parseInt(event.target.id) === id) {
    clicked = true;
    var newPicEl = document.getElementById(event.target.id);
    newPicEl.src = 'https://placehold.it/216x233/111';
  } 
  clicked = false;

}


let timerId = setTimeout(function tick() {

  if (prevId !== null && clicked === false){
    console.log(clicked);
    for (var i =0; i < 10; i++) {    
    var newPicEl = document.getElementById(i);
    newPicEl.src = 'https://placehold.it/216x233/111';
    }
    clicked = false;
  }

  id = Math.floor(Math.random()*9);
  console.log('scheduler id: ' + id );
  prevId = id;
  newPicEl = document.getElementById(id);
  newPicEl.src = 'gold.png';

  
  timerId = setTimeout(tick, timeInterval); 
}, timeInterval);