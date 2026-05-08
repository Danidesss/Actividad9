const { createServer } = require('node:http');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 3000;

// Declaración de función
function add(a, b) {
    return a + b;
}

// Expresión de función
const multiply = function(a, b) {
    return a * b;
};
let Saludoo = "Holamundo, me funciono la app vivachile locoOOOO";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const resultadoSuma = add(5, 10);
  const resultadoMulti = multiply(resultadoSuma, 5);
  let mensajeValidacion = "";

    const contenido = "Registro de visita: Alguien entró al servidor a las " + new Date().toLocaleString();

    // --- EJERCICIO PUNTO 4: Uso de 'fs' para escribir un archivo ---
    fs.writeFile('log_visitas.txt', contenido, (err) => {
        if (err) {
            console.error("Error al escribir el archivo:", err);
            return;
        }
        console.log("Archivo 'log_visitas.txt' actualizado correctamente.");
    });


    //Estructura de control if
    if (resultadoMulti > 60) {
        mensajeValidacion = "¡Aviso! El número de la multiplicación es mayor a 60.";
    } else {
        mensajeValidacion = "El número de la multiplicación es 60 o menor.";
    }
    // Enviamos la respuesta al navegador
    let listaNumeros = "Lista del 1 al 10:\n";
    for (let i = 1; i <= 10; i++) {
        listaNumeros += i + " "; 
    }

    // Enviamos todo al navegador
    res.end(`${Saludoo}
(Resultado suma 5 y 10: ${resultadoSuma})
${mensajeValidacion} (Resultado: ${resultadoMulti})

${listaNumeros}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});