import express from "express";
import { createGranja, deleteGranja, getAllGranja, getGranja, updateGranja } from "../controller/Controler.js";
const router = express.Router();

router.get('/', getAllGranja)
router.get('/:id', getGranja)
router.post('/', createGranja)
router.put('/:id', updateGranja)
router.delete('/:id', deleteGranja)

export default router;