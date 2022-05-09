import mongoose from 'mongoose';
import editeur from '../models/editeur.model.js';

import Auteur from '../models/editeur.model.js';

export const getediteur = async (req, res) => { 
    try {
        const cat = await editeur.find();
                
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getediteurByID = async (req, res) => { 
    try {
        const cat = await editeur.findById(req.params.id);
        
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createediteur = async (req, res) => {
    const { maisonedit, siteweb,email} = req.body;

    const newediteur = new editeur({  maisonedit:maisonedit, siteweb:siteweb,email:email })

    try {
        await newediteur.save();

        res.status(201).json(newediteur );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateediteur= async (req, res) => {
    const { id } = req.params;
    const { maisonedit, siteweb,email} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de editeur avec un id: ${id}`);

    const e1 = { maisonedit:maisonedit, siteweb:siteweb,email:email, _id: id };

    await Auteur.findByIdAndUpdate(id, e1);

    res.json(e1);
}

export const deleteediteur = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de editeur avec l'ID: ${id}`);

    await editeur.findByIdAndDelete(id);

    res.json({ message: "editeur supprimé avec succès." });
}
