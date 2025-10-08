document.getElementById("btn_sesion").addEventListener("click", function() {
    cambiar_estado_sesion();
});

document.getElementById("btn_add_definition").addEventListener("click", function() {
    desaparecer_btn();
});

document.getElementById("btn_like").addEventListener("click", function() {
    agregar_me_gusta_cat();
});

document.getElementById("btn_like_2").addEventListener("click", function() {
    agregar_me_gusta_dog();
});

function cambiar_estado_sesion() {
    var boton = document.getElementById('btn_sesion'); 
    boton.innerText = "Cerrar sesión";
}

function desaparecer_btn(){
    var boton = document.getElementById('btn_add_definition'); 
    boton.style.display = "none";
}

function mostrarAlerta_cat() {
    alert('Gato Atigrado was liked');
}

function mostrarAlerta_dog() {
    alert('Golden Retriever was liked');
}

function agregar_me_gusta_cat(){
    var boton = document.getElementById('btn_like'); 
    const number_btn = boton.textContent;
    const match = number_btn.match(/\d+/);
    if (match) {
        const numero = parseInt(match[0]); 
        boton.innerText = (numero + 1) + " me gusta";
    }    
}

function agregar_me_gusta_dog(){
    var boton = document.getElementById('btn_like_2'); 
    const number_btn = boton.textContent;
    const match = number_btn.match(/\d+/);
    if (match) {
        const numero = parseInt(match[0]); 
        boton.innerText = (numero + 1) + " me gusta";
    }    
}