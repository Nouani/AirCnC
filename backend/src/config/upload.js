const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..','uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`);
        }
    })
}

/* ANOTACOES */
// path.resolve => Cada sistema tem um modo de diretorio. Essa função arruma o diretorio 
// de acordo com o sistema