import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { db_Connection } from "./database/db_connection.js";
import videoRouter from "./Routes/videoRouter.js"

const app = express();

dotenv.config({
    path: ".env"
})

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  

app.use(express.json())

db_Connection();

app.get("/",(req,res)=> {
    res.send("WEloceom")
})

app.use("/api/v1/", videoRouter)



app.listen((process.env.PORT),()=> {
    console.log(`App listening on port ${process.env.PORT}`)
})