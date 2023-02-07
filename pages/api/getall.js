
import dbConnect from "../../utils/mongoConnect"
import Recipe from "./schema/recipe";


export default async function handle(req, res) {
    await dbConnect()
    try {
        const recipe = await Recipe?.find()
        if (recipe){
            // console.log(recipe)
            res.status(200).json({success: true, recipe:recipe[1]});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({success: false});
    }
}