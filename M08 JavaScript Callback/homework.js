/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
   // En esta implementación, la función mayuscula utiliza el método charAt(0)
   // para obtener la primera letra del nombre y luego utiliza el método toUpperCase()
   // para convertirla a mayúscula. Luego, nombre.slice(1) se utiliza para obtener
   // el resto del nombre después de la primera letra y se concatena con la letra en
   // mayúscula para formar el nombre completo con la primera letra en mayúscula.
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   // let suma = 0;
   //    for (let i = 0; i < arrayOfNumbers.length; i++) {
   //       suma += arrayOfNumbers[i];
   //       }
   //       cb(suma);

   const sum = arrayOfNumbers.reduce((total, current) => total + current, 0);
   cb(sum);

   // En esta implementación, la función sumarArray utiliza el método reduce
   // para iterar a través del arreglo de números. El método reduce recibe una
   // función de reducción que toma dos parámetros: el acumulador (total) y
   // el elemento actual (current). En cada iteración, la función suma el 
   // elemento actual al acumulador. El segundo argumento de reduce (0 en este caso) es
   // el valor inicial del acumulador.

}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   //    for (let i = 0; i < array.length; i++) {
   //       cb(array[i]);
   //   }

   // En esta implementación, la función forEach recibe un arreglo y un callback.
   // Utiliza un bucle for para iterar sobre cada elemento del arreglo y
   // llama al callback pasándole el elemento actual como argumento en cada iteración.


   array.forEach(elemento => {
      cb(elemento);
   });

   //El método forEach() ejecuta la función indicada una vez por cada elemento del array.
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:


   // const newArray = [];
   //  array.forEach(elemento => {
   //      const resultado = cb(elemento);
   //      newArray.push(resultado);
   //  });
   //  return newArray;

   //  En esta implementación, la función map crea un nuevo arreglo vacío llamado newArray.
   //   Utiliza el método forEach para iterar sobre cada elemento del arreglo pasado.
   //    Por cada elemento, ejecuta el callback pasándole el elemento y guarda el resultado
   //     en resultado. Luego, ese resultado se agrega al nuevo arreglo 
   //     con newArray.push(resultado).


   return array.map(elemento => cb(elemento));

   //    El método map() crea un nuevo array con los resultados de la llamada 
   //    a la función indicada aplicados a cada uno de sus elementos.

   // EJ:
   // var numbers = [1, 5, 10, 15];
   // var doubles = numbers.map(function (x) {
   //   return x * 2;
   // });
   // // doubles is now [2, 10, 20, 30]

}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   return arrayOfStrings.filter(elemento => elemento.startsWith("a"));

   // El método filter() crea un nuevo array con todos los elementos
   //  que cumplan la condición implementada por la función dada.
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
