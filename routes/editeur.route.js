import express from 'express';
const router = express.Router();

import { getediteur, getediteurByID, createediteur, updateediteur, deleteediteur } from '../controllers/editeur.controller.js';

/**
 * @route   GET /api/auteurs
 * @desc    Get All auteurs
 * @access  Public
 */
router.get('/', getediteur);

/**
 * @route   POST /api/auteurs
 * @desc    Ajouter un auteur
 * @access  Public
 */
router.post('/', createediteur);

/**
 * @route   GET /api/auteurs/:id
 * @desc    Renvoyer un auteur
 * @access  Public
 */
router.get('/:id', getediteurByID);

/**
 * @route   PUT /api/auteurs/:id
 * @desc    Modifier un auteur
 * @access  Public
 */
router.put('/:id', updateediteur);

/**
 * @route  DELETE /api/auteurs/:id
 * @desc    Supprimer un auteur
 * @access  Public
 */
router.delete('/:id', deleteediteur);

export default router;
