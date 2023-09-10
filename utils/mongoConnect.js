/* This is a database connection function*/
import mongoose from 'mongoose'


const connection = {} /* creating connection object*/

async function dbConnect(uri, callback) {
    /* check if we have connection to our databse*/
    if (connection.isConnected) {
        return
    }

    /* connecting to our database */
    const db = await mongoose.connect("mongodb+srv://netpes:netpes@cluster0.cnxmrap.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState
}

export default dbConnect
