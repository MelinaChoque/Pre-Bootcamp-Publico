    let naveDatos = {
      left: 450,
      top: 625
    };

    const aliens = [
      { left: 800, top: 0 },
      { left: 450, top: 175 },
      { left: 20, top: 300 },
      { left: 850, top: 175 },
      { left:  50, top:  50 },
      { left: 800, top: 400 },
    ];
    var disparos = [];
    
    function dibujaNave() {
      const nave = document.createElement("div");
      nave.classList.add("nave");
      nave.style.left = naveDatos.left + "px";
      nave.style.top = naveDatos.top + "px";
      document.getElementById("naves").appendChild(nave);
    }

    function dibujaAliens() {
        var contenedorAliens = document.getElementById("aliens");
        contenedorAliens.innerHTML = "";
        for (let i = 0; i < aliens.length; i++) {
            const alienPos = aliens[i];
            const alien = document.createElement("div");

            alien.classList.add("alien");
            alien.style.left = alienPos.left + "px";
            alien.style.top = alienPos.top + "px";

            contenedorAliens.appendChild(alien);
            aliens[i].elemento = alien; 
          }
        }
              
      function moverAliens(){

        for(var x = 0; x < aliens.length; x ++){
            if(aliens[x].top < 620) {
              aliens[x].top = aliens[x].top + 10;
            }
          }

      }


    function moverDisparos() {
      console.log(disparos.length);
      for(var x = 0; x < disparos.length; x ++){
        var disparo = disparos[x];
        var top = parseInt(disparo.style.top);
        top -= 10;
        disparo.style.top = top + "px";
      }
    }

    function dibujarDisparo(left, top) {
      const disparo = document.createElement("div");
      disparo.classList.add("disparo");
      disparo.style.left = left +"px";
      disparo.style.top = top +  "px";  
      document.getElementById("disparos").appendChild(disparo);
      disparos.push(disparo);
    }

    function actualizarNave() {
      const nave = document.querySelector(".nave");
      nave.style.left = naveDatos.left + "px";
      nave.style.top = naveDatos.top + "px";
    }

        function cicloJuego() {
            dibujaAliens();
            moverAliens();
            setTimeout(cicloJuego, 200)
        }
    document.addEventListener("DOMContentLoaded", () => {

        dibujaNave();
        dibujaAliens();
        cicloJuego();
        setInterval(moverDisparos, 10);

      document.onkeydown = function(e) {
        if (e.keyCode === 37 && naveDatos.left >0 ) naveDatos.left -= 10;// izquierda
        if (e.keyCode === 39 && naveDatos.left <1190 ) naveDatos.left += 10; // derecha
        if (e.keyCode === 38 && naveDatos.top > 233 ) naveDatos.top  -= 10; // arriba
        if (e.keyCode === 40 && naveDatos.top < 620 ) naveDatos.top  += 10; // abajo
        if(e.keyCode === 32){const left = naveDatos.left + 34; const top = naveDatos.top - 8;dibujarDisparo(left, top)};
  
        actualizarNave();
      };
    });