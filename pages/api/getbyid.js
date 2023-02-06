import dbConnect from "../../utils/mongoConnect"
import Recipe from "./schema/recipe";


export default async function handle(req, res) {
    await dbConnect()
    const {index} = req.body
    let check = false
    let datame;
            try {
               Recipe.find().then((recipes)=>{
                   if (recipes) {
                       // console.log(recipes[0].alldata)
                       recipes[0].alldata.map((singlerecipe) => {
                           if (singlerecipe.index == index) {
                               check = true
                               datame = singlerecipe
                               console.log("yeah")
                           }
                       })
                   }
                   if (check){
                       res.status(200).json({recipe:datame})
                   } else{
                       res.status(200).json({recipe:datame})
                   }

               })

            } catch (error) {
                console.log(error);
                res.status(400).json({success: false});
            }   
}