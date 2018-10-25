const fs = require('fs')
const path = require('path')
Crear = document.getElementById('btnCrear')
Leer = document.getElementById('btnLeer')
Eliminar = document.getElementById('btnEliminar')
fileName = document.getElementById('fileName')
fileContents = document.getElementById('fileContents')


let pathName = path.join(__dirname, 'Files')
Crear.addEventListener('click', function() {
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err) {
        if (err) {
            return console.log(err);
        }

        console.log("exitosamente guardado!");
    });
})

Leer.addEventListener('click', function() {
    let file = path.join(pathName, fileName.value)
    fs.readFile(file, function(err, data) {
        if (err) {
            return console.log(err);
        }
        fileContents.value = data
        console.log("fue leido el archivo");
    })
})

Eliminar.addEventListener('click', function() {
    let file = path.join(pathName, fileName.value)
    fs.unlink(file, function(err) {
        if (err) {
            return console.log(err);
        }
        fileName.value = ''
        fileContents.value = ''
        console.log("El archivo fue eliminado");
    })
})