
import dbConnect from "../../utils/mongoConnect"
import Recipe from "./schema/recipe";
import mongoose from "mongoose";


export default async function handle(req, res) {
    try {
        await dbConnect()
        const {id, text} = req.body;
        let modified = false;

        Recipe?.find().then((recipe) => {

            recipe[1].alldata[id].data = text
            console.log(recipe[1].alldata[id])
            recipe[1].markModified("alldata");
            recipe[1].save((err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("saved!");
                    modified = true
                }
            })
        })
        if (modified) {
            res.status(200).json({success: true})
        } else {
            res.status(200).json({success: false})
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({success: false});
    }
}

