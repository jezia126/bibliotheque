import mongoose from "mongoose"
var editeurSchema = mongoose.Schema({
    maisonedit: String,
    siteweb: String,
    email: String
});
const editeur = mongoose.model('editeur', editeurSchema);
export default editeur
