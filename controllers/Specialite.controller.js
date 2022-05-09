import mongoose from 'mongoose';
import Specialite from '../models/Specialite.model.js';

import Auteur from '../models/Specialite.model.js';

export const getSpecialite = async (req, res) => { 
    try {
        const cat = await Auteur.find();
                
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSpecialiteByID = async (req, res) => { 
    try {
        const cat = await Specialite.findById(req.params.id);
        
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSpecialite = async (req, res) => {
    const { nomspecialite} = req.body;

    const newSpecialite = new Specialite({ nomspecialite:nomspecialite })

    try {
        await newSpecialite.save();

        res.status(201).json(newSpecialite );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSpecialite= async (req, res) => {
    const { id } = req.params;
    const { nomspecialite} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de specialite avec un id: ${id}`);

    const sp1 = { nomspecialite:nomauteur,  _id: id };

    await Auteur.findByIdAndUpdate(id, sp1);

    res.json(sp1);
}

export const deleteSpecialite = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de specialite avec l'ID: ${id}`);

    await Specialite.findByIdAndDelete(id);

    res.json({ message: "specialite supprimé avec succès." });
}
