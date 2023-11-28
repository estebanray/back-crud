// importar la conexin a la db
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const GranjaModel = db.define('granjas', {
    nombre: {type: DataTypes.STRING},
    precio: {type: DataTypes.DECIMAL},
    categoria_id: {type: DataTypes.STRING},
})

export default GranjaModel;