const h1 = document.querySelector('h1');
const parrafito = document.getElementsByClassName(".parrafito");
const p = document.querySelector("p");
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'patito';
console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('rojo');

input.value = 456;

const img = document.createElement('img');

img.setAttribute('src', 'https://th.bing.com/th/id/OIP.QyFUZ4rakdzPQf5hBoszewHaNH?rs=1&pid=ImgDetMain');
console.log(img);

pid.append(img);