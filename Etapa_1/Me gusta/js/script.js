const botonLike_1 = document.querySelector('#btn_like_1');
const botonLike_2 = document.querySelector('#btn_like_2');
const botonLike_3 = document.querySelector('#btn_like_3');
const contadorLikes_1 = document.querySelector('#contadorLikes_1');
const contadorLikes_2 = document.querySelector('#contadorLikes_2');
const contadorLikes_3 = document.querySelector('#contadorLikes_3');

let likes_1 = 0;
let likes_2 = 0;
let likes_3 = 0;

botonLike_1.addEventListener('click', function() {
    likes_1++;
    contadorLikes_1.textContent = likes_1 + " like(s)"; 
});

botonLike_2.addEventListener('click', function() {
    likes_2++;
    contadorLikes_2.textContent = likes_2 + " like(s)"; 
});

botonLike_3.addEventListener('click', function() {
    likes_3++;
    contadorLikes_3.textContent = likes_3 + " like(s)"; 
});