import db from "../database/db.js";
import { DataTypes } from "sequelize";

const GranjaModel = db.define('granjas', {
    nombre: {type: DataTypes.STRING},
    precio: {type: DataTypes.DECIMAL},
    categoria_id: {type: DataTypes.STRING},
})


//prueba para traer la tabla categoria
const CategoriaModel = db.define('categorias', {
    categoria: { type: DataTypes.STRING }
});

//asociar ambas tablas
GranjaModel.belongsTo(CategoriaModel, { foreignKey: 'categoria_id' });
CategoriaModel.hasMany(GranjaModel, { foreignKey: 'categoria_id' });


export default {
    GranjaModel,
    CategoriaModel
};