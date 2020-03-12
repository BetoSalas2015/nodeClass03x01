const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('=========================='.green);
    console.log(`== Tabla del ${base} ===========`.green);
    console.log('=========================='.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.brightYellow);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número'.red);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += ` ${i} * ${base} = ${base * i} \n`;
        }
        fs.writeFile(`./tablas/Tabla-${base}.txt`, data, (err) => {
            if (err)
                return reject(err);
            else
                resolve(`El archivo Tabla-${base}.txt ha sido creado. `);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};