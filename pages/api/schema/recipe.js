import mongoose from "mongoose";

const mod = new mongoose.Schema({
    alldata: []
});
const Recipe = mongoose.models.recipesfordads || mongoose.model("recipesfordads",mod)
export default Recipe;