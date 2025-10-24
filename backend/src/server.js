import express from "express";
import router from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//npm install nodemon -D 
//upper is command to restart without manually run again the terminal
//In development, run node run dev
//In deployment, run node run start


app.use(cors({
    origin:"http://localhost:5173",
}));
//middleware to allow to get access of the request body
app.use(express.json());//this middleware will parse JSON bodies:req.body
app.use(rateLimiter);

//simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });
app.use("/api/notes", router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});


//mongodb+srv://huangm871_db_user:dWLRYm0SHWupDhrs@cluster0.j9tqzgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0