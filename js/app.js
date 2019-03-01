let output = document.querySelector('#output');

let url = 'https://api.myjson.com/bins/r094m';

let xhr = new XMLHttpRequest();

console.log(xhr);

xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if(xhr.readyState == 4 && xhr.statusText == "OK" && xhr.status == 200) {
        console.log('Data is ready');
        console.log(xhr.responseText);
    }
}

xhr.open('GET', url);

xhr.send();
