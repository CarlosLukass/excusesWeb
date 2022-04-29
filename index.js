'use strict'

let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
let what = ['eat', 'pissed', 'crushed', 'broked'];
let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];


function createExcuse(who, what, when) {

  const $html = document.getElementById('excuse');

  let randomExcusePicked = (max, min) => {
    return Math.floor(Math.random() * max) - min
  };

  let whoPicker = randomExcusePicked(who.length, 0);
  let whatPicker = randomExcusePicked(what.length, 0);
  let whenPicker = randomExcusePicked(when.length, 0);

  let excuse = $html.innerHTML = `${who[whoPicker]} ${what[whatPicker]} my homework ${when[whenPicker]}`

  return excuse

}

createExcuse(who, what, when)
