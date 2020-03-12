const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
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
    crearArchivo
};