import Models from '../models/Models.js';

const { GranjaModel, CategoriaModel } = Models;

//Metodos:

export const getAllGranja = async (req, res) => {
    try {
        const granjasConCategorias = await GranjaModel.findAll({
            include: [{ model: CategoriaModel, attributes: ['categoria'] }]
        });
        res.json(granjasConCategorias);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getGranja = async (req, res) => {
    try {
        const granja = await GranjaModel.findAll({
            where:{id:req.params.id}
        })
        res.json(granja[0])
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

export const createGranja = async (req, res) => {
    try {
        await GranjaModel.create(req.body)
        res.json({
            "message": "¡Producto agregado correctamente!"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

export const updateGranja = async (req, res) => {
    try {
        await GranjaModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡Producto actualizado correctamente!"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

export const deleteGranja = async (req, res) => {
    try {
        await GranjaModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "¡Producto Eliminado correctamente!"
        })
    } catch (error) {
        res.json ( {message: error.message} )
    }
}