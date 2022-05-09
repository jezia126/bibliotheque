import express from 'express';
const router = express.Router();

import { getSpecialite, getSpecialiteByID, createSpecialite, updateSpecialite, deleteSpecialite } from '../controllers/Specialite.controller.js';

/**
 * @route   GET /api/specialite
 * @desc    Get All auteurs
 * @access  Public
 */
router.get('/', getSpecialite);

/**
 * @route   POST /api/auteurs
 * @desc    Ajouter un auteur
 * @access  Public
 */
router.post('/', createSpecialite);

/**
 * @route   GET /api/auteurs/:id
 * @desc    Renvoyer un auteur
 * @access  Public
 */
router.get('/:id', getSpecialiteByID);

/**
 * @route   PUT /api/auteurs/:id
 * @desc    Modifier un auteur
 * @access  Public
 */
router.put('/:id', updateSpecialite);

/**
 * @route  DELETE /api/auteurs/:id
 * @desc    Supprimer un auteur
 * @access  Public
 */
router.delete('/:id', deleteSpecialite);

export default router;
