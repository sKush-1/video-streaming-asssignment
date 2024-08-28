import mongoose from "mongoose";

export const db_Connection = ()=>{
    mongoose.connect(`${process.env.MONGO_URL}`, {
        dbName: `${process.env.DB_NAME}`
    }).then(()=>{
        console.log("Connected to database.")
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`)
    })
}