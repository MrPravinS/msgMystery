import mongoose from "mongoose";

type connectionObject = {
    isConnected?:number
}

const connection : connectionObject = {}

async function dbConnect():Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database");
        
    }
    try {
        const db = await mongoose.connect(process.env.MONGOSB_URI || "",{})
        connection.isConnected =  db.connection[0].readyState
        console.log("DB Connected Successfully");
        
    } catch (error) {
        console.log("Database connection failed ", error);
        process.exit(1)
        
    }
}
export default dbConnect