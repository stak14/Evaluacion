/*const multiplicar = (x, y) => { x * y };

function calcularMultiplicacion(a, b, c) {
    let resultado = multiplicar(a, b, c);

    console.log("Resultado de la multiplicación:", resultado);

    imprimir(resultado);
}

calcularMultiplicacion(3, 7);
// Resultado de la multiplicación: 21*/

//ME COSTO RECORDAR LAS FUNCIONES, Y YA QUE NO TENIA USO BORRE EL C PARA QUE PUEDA DAR EL RESULTADO Y LAS LLAVES DE CONST NO IBAN O SI PERO HABIA QUE PONER RETURN
const multiplicar = (x, y) => x * y;

function calcularMultiplicacion(a, b) {
  let resultado = multiplicar(a, b);
  console.log("Resultado de la multiplicación:", resultado);
}

calcularMultiplicacion(3, 7);