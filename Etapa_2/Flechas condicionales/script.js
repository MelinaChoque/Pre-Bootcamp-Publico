const grado_a_fahrenheit = temp =>(temp * 9 / 5) + 32;
const mensaje_en_cadena = (nombre, edad) => (`Hola ${nombre}, tienes ${edad} años de edad.`);
const milla_a_km = milla => milla * 1.60934;
const clima_consejos = (clima_situacion) =>
    clima_situacion === "lluvioso" ? 'Asegurese de llevar paraguas.' :
    clima_situacion === "soleado" ? 'Deberia llevar un sombrero':
    clima_situacion === "frio" ? 'Deberia abrigarse bien':
    clima_situacion === "tormenta" ? 'Recomendamos en lo posible quedarse en casa':
    "Error: pruebe con lluvioso, soleado, frio o tormenta"

console.log(grado_a_fahrenheit(15))
console.log(mensaje_en_cadena("Juan",30))
console.log(milla_a_km(30))
console.log(clima_consejos("lluvioso"))
console.log(clima_consejos("soleado"))
console.log(clima_consejos("frio"))
console.log(clima_consejos("tormenta"))
console.log(clima_consejos("nublado"))