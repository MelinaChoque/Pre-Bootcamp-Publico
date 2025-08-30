    let naveDatos = {
      left: 450,
      top: 725
    };

    const aliens = [
      { left: 1100, top: 0 },
      { left: 450, top: 175 },
      { left: 20, top: 300 },
      { left: 850, top: 175 },
      { left:  50, top:  50 },
      { left: 1000, top: 400 },
    ];

    function dibujaNave() {
      const nave = document.createElement("div");
      nave.classList.add("nave");
      nave.style.left = naveDatos.left + "px";
      nave.style.top = naveDatos.top + "px";
      document.getElementById("naves").appendChild(nave);
    }

    function dibujaAliens() {
        var contenedorAliens = document.getElementById("aliens");

        for (let i = 0; i < aliens.length; i++) {
            const alienPos = aliens[i];
            const alien = document.createElement("div");
            alien.classList.add("alien");
            alien.style.left = alienPos.left + "px";
            alien.style.top = alienPos.top + "px";
            contenedorAliens.appendChild(alien);
        }
    }

    function actualizarNave() {
      const nave = document.querySelector(".nave");
      nave.style.left = naveDatos.left + "px";
      nave.style.top = naveDatos.top + "px";
    }

    document.addEventListener("DOMContentLoaded", () => {
      dibujaNave();
      dibujaAliens();

      document.onkeydown = function(e) {
        if (e.keyCode === 37 && naveDatos.left >0 ) naveDatos.left -= 10;// izquierda
        if (e.keyCode === 39 && naveDatos.left <1100 ) naveDatos.left += 10; // derecha
        console.log(naveDatos);
        if (e.keyCode === 38 && naveDatos.top > 480 ) naveDatos.top  -= 10; // arriba
        if (e.keyCode === 40 && naveDatos.top < 720 ) naveDatos.top  += 10; // abajo
        actualizarNave();
      };
    });
