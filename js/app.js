let output = document.querySelector('#output');
let btn = document.querySelector('input');
btn.addEventListener('click', loadData);

let url = 'https://randomuser.me/api/?results=50';

function loadData() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
    
        if(xhr.readyState == 4 && xhr.status == 200) {

            let data = JSON.parse(xhr.responseText);

            outputData(data.results);
        }
    }

    xhr.open('GET', url);

    xhr.send();
}

function outputData(data) {
  
   console.log(data);
   data.map((item) => {
       console.log(item)
       let img = item.picture.medium;
       output.innerHTML += '<img src="'+img+'">';
   })

}
