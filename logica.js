function sumarCuadros(arrayNumeros) {
    
    var grafico = '';

    
    for (var i = 0; i < arrayNumeros.length; i++) {
     
        var numero = arrayNumeros[i];

        
        var cuadrado = numero * numero;

        
        grafico += numero + ': ';

       
        var limite = Math.min(cuadrado, 10);
        for (var j = 0; j < limite; j++) {
            grafico += '*';
        }

      
        grafico += '\n';
    }

    // Mostrar el gráfico en la consola
    console.log(grafico);
}

// Ejemplo de uso de la función
var arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);


    