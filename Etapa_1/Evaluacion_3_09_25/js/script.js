let btn_adopciones = document.querySelectorAll(".btn_adoptar_2");
let select_Arbol = document.querySelector(".tipo_arbol");
var tipo_arbol = document.getElementById('tipo_arbol');

select_Arbol.addEventListener("change", () => {
    const valor = select_Arbol.value;

    if (valor === "value1") {
        tipo_arbol.textContent = "Todos los Árboles";
    } else if (valor === "value2") {
        tipo_arbol.textContent = "Árboles Frutales";
    } else if (valor === "value3") {
        tipo_arbol.textContent = "Árboles de flores";
    } else if (valor === "value4") {
        tipo_arbol.textContent = "Árboles Ornamentales";
    }
});

btn_adopciones.forEach(boton => {
    boton.addEventListener("click", () => {
        boton.textContent = "Adoptado";
        boton.style.backgroundColor = "#38791f";
        boton.style.color = "white";
    });
});

function mostrarAlerta_donacion() {
    alert('¡Gracias por donar a AdoptarTuÁrbol!');
}