function random(max,min){
  return Math.floor(Math.random()* (max-min +1))+min;
}
let posPerro=[];
let vida=3;
let maxPuntaje=0;



document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".contenedor-juego");
  const columnas = Array.from(contenedor.querySelectorAll(".fila")); // son columnas

  var objetos = {
    1: 'perro',
    2: 'papas',
    3: 'hamburguesa'
  }
  let cant=0;

for (let colIndex = 0; colIndex < columnas.length; colIndex++) {
  const celdas = Array.from(columnas[colIndex].children);
  for (let filaIndex = 0; filaIndex < celdas.length; filaIndex++) {
    const celda = celdas[filaIndex];
    
    if (!(filaIndex === 0 && colIndex === 0) && !(filaIndex === 1 && colIndex === 1) && !(filaIndex === 4 && colIndex === 1) ){
      let valor = random(0, 4); 
      if (valor === 1 && cant == 0) {
        const perro = document.createElement("div");
        perro.classList.add("perro");
        celda.appendChild(perro);
        posPerro=[colIndex,filaIndex];
        cant++; 
      }
      if (valor === 2) {
        const papas = document.createElement("div");
        papas.classList.add("papas");
        celda.appendChild(papas);
        maxPuntaje=maxPuntaje+1;
      } else if (valor === 3) {
        const hamburguesa = document.createElement("div");
        hamburguesa.classList.add("hamburguesa");
        celda.appendChild(hamburguesa);
        maxPuntaje=maxPuntaje+1;
      }
    }
  }
}
function muevePerro() {
  const perro = document.querySelector(".perro");

  let filaActual = posPerro[1];
  let colActual = posPerro[0];
  let nuevaFila = filaActual;
  let nuevaCol = colActual;

  const movimiento = random(-1, 4); 

  if (movimiento === 0)   nuevaCol--; //izquierda
  else if (movimiento === 1) nuevaCol++;// derecha
  else if (movimiento === 2 ) nuevaFila--, console.log("fila "+nuevaFila);// arriba
  else if (movimiento === 3) nuevaFila++;//abajo

      if (nuevaCol < 0 || nuevaCol >= columnas.length) return;
      const celdas = Array.from(columnas[nuevaCol].children);

      if (nuevaFila < 0 || nuevaFila >= celdas.length) return;
      const nuevaCelda = celdas[nuevaFila];
      if (nuevaCelda.classList.contains('recuadro-negro')) return;

    columnas[colActual].children[filaActual].removeChild(perro);
    nuevaCelda.appendChild(perro);

    posPerro = [nuevaCol, nuevaFila];

}
  
  let posicion = { fila: 0, col: 0 }; 


  const gato = contenedor.querySelector(".gato");

  let puntaje=0;

  
  document.onkeydown = function(e) {
    let nuevaFila = posicion.fila;
    let nuevaCol = posicion.col;
  document.getElementById("puntaje").textContent = maxPuntaje;
  document.getElementById("vidas").textContent = vida;
    if (e.keyCode === 37) nuevaCol--; // izquierda
    else if (e.keyCode === 39) nuevaCol++; // derecha
    else if (e.keyCode === 38) nuevaFila--; // arriba
    else if (e.keyCode === 40) nuevaFila++; // abajo
    else return;

    if (nuevaCol < 0 || nuevaCol >= columnas.length) return;
    const celdas = Array.from(columnas[nuevaCol].children);

    if (nuevaFila < 0 || nuevaFila >= celdas.length) return;

    const nuevoRecuadro = celdas[nuevaFila];
    if (nuevoRecuadro.classList.contains('recuadro-negro')) return;

    const hamburguesa = nuevoRecuadro.querySelector(".hamburguesa");
    const papas = nuevoRecuadro.querySelector(".papas");
    if (hamburguesa){
      puntaje=puntaje+1;
      hamburguesa.remove()
    }else if (papas){
      puntaje=puntaje+1;
      papas.remove()
    };
    console.log(maxPuntaje);
    document.getElementById("puntaje").textContent = puntaje;
    if(posPerro[0] == nuevaCol && posPerro[1] == nuevaFila ){
      vida=vida-1;
      document.getElementById("vidas").textContent = vida;
      
      console.log("Perdiste una vida: Tienes" + vida +" vidas restantes")
    }
    if (vida <= 0) {
        alert("¡PERDISTE! No obtubiste todos los puntos :c");
        location.reload();
    }else if(puntaje==maxPuntaje){
        alert("!GANASTE¡");
        location.reload();
    }
    columnas[posicion.col].children[posicion.fila].removeChild(gato);
    nuevoRecuadro.appendChild(gato);
    posicion = { fila: nuevaFila, col: nuevaCol };
  };
  setInterval(muevePerro, 750);
});
