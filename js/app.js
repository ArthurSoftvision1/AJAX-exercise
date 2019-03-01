let output = document.querySelector('#output');

let url = 'https://api.myjson.com/bins/r094m';

let xhr = new XMLHttpRequest();

console.log(xhr);

xhr.open('GET', url);

xhr.send();
