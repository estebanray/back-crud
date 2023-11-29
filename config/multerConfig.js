import multer from 'multer';
import path from 'path';

// Configurar Multer para almacenar las imágenes en el sistema de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/image'); // Establece el directorio donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    // Cambiar la extensión del archivo para asegurarse de que sea una imagen
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// Filtrar solo los archivos de imagen
const imageFilter = function (req, file, cb) {
  const allowedFileTypes = /jpeg|jpg|png|gif/;
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedFileTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Solo se permiten imágenes (jpeg, jpg, png, gif)');
  }
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

export { upload };

