let output = document.querySelector('#output');

let url = 'https://api.myjson.com/bins/r094m';

let xhr = new XMLHttpRequest();

console.log(xhr);

xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if(xhr.readyState == 4 && xhr.statusText == "OK" && xhr.status == 200) {
        console.log('Data is ready');
        console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        outputData(data);
    }
}

xhr.open('GET', url);

xhr.send();


function outputData(data) {
  
   data.people.forEach(function(element) {
       console.log(element);
       output.innerHTML += element.firstName + " " + element.lastName + '<br>';
   })
}
