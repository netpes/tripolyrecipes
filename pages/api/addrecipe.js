
import dbConnect from "../../utils/mongoConnect"
import Recipe from "./schema/recipe";
import mongoose from "mongoose";


export default async function handle(req, res) {
    await dbConnect()
    const {title,data} = req.body;
    let modified = false;
    
    try {
        Recipe?.find().then((recipe)=>{
            const index = recipe[1].alldata.length
            console.log(recipe[1].alldata.length)
            recipe[1].alldata.push({index,title,data});
            console.log(recipe[1].alldata[index])
            recipe[1].markModified("alldata");
            recipe[1].save((err,res)=>{
                if (err){
                console.log(err)
            }else {
                    console.log("saved!");
                    modified = true
                }
            })
        })
        if (modified){
            res.status(200).json({success:true})
        } else {
            res.status(200).json({success:false})
        }
       
    } catch (error) {
        console.log(error);
        res.status(400).json({success: false});
    }
}