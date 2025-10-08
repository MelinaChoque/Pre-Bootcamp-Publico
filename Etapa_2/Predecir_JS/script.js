const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);

// 1. SALIDA PREDIC = 30, salario no esta definido.
// 2. SALIDA REAL = 30, undefined.
// 3. EXPLICACIÓN: Se declara un objeto, donde tiene otro objeto, luego declaramos info para destructurar el objeto, como la variable edad 
// existe obtiene el valor pero la variable salario no existe, por ende la crea pero sin definirla, despues las muestras.

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);

// 1. SALIDA PREDIC = {a:1,b:4,c:5,d:6}
// 2. SALIDA REAL = {a: 1, b: 4, c: 5, d: 6};
// 3. EXPLICACIÓN: Se declara dos objetos, para luego unirlos con con el operador spread, pero al tener variables iguales, se sobreescriben, quedando como resultado
// el objetoB como predominante.

// const verificar = () => {
//     if (true) {
//         const a = 2;
//         let b = 3;
//         var c = 4;
//     }
//     console.log(c);
//     console.log(a);
//     console.log(b);
// }
// verificar();

// 1. SALIDA PREDIC = 4 3 a no esta definida;
// 2. SALIDA REAL = 4;
// 3. El alcance de const y var solo existen dentro del bloque, lo que hace que no se pueda acceder desde afuera, en cambio, var
// se puede usar en cualquier parte de la función donde fue declarada.

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);

// 1. SALIDA PREDIC = 29:
// 2. SALIDA REAL = 29;
// 3. Object.freeze, hace que el objeto no se puede modificar, eliminar o agregar nada al objeto.

const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);

// 1. SALIDA PREDIC = 
    // [1, 2, 3]
    // [1, 2, 3, 4]
// 2. SALIDA REAL = 
    // (3) [1, 2, 3]
    // (4) [1, 2, 3, 4]
// 3. En este caso concat unio un string con un array, pero crea un arreglo nuevo.

const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);

// 1. SALIDA PREDIC = manzana naranja
// 2. SALIDA REAL = 
// manzana
// naranja
// 3. Lo que sucede en este caso es que se accede a los elementos del arreglo atraves de la destructuracion,
// se asigna valores segun el indice del arreglo, en este caso los dos primeros(manzana, naranja).

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}

// 1. SALIDA PREDIC =
// 0
// 1
// 0
// 1
// 0
// 1
// 2. SALIDA REAL = 
// 0
// 1
// 0
// 1
// 0
// 1
// 3. El for de afuera se repite 3 veces, mientras que el de adentro imprime 2 valores cada vez, esto ocurre porque
// let solo existe dentro de su bloque, por mas que tengan el mismo nombre.

const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);

// 1. SALIDA PREDIC =
// [1, 2, 3, 3, 4, 5]
// 2. SALIDA REAL = 
// (6) [1, 2, 3, 3, 4, 5]
// 3. Los 3 puntos (...), significa el uso de SPREAD, lo que hace es que copia y combina arrays/objetos.

const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();

// 1. SALIDA PREDIC =
//  Luis
//  25
// 2. SALIDA REAL = 
// Luis
// 25
// 3. Var existe globalmente, por eso se puede modificar la variable, en cambio let solo existe localmente, 
// por ende toma el primer valor que encuentra, el segundo no lo lee.