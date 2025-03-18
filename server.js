import express from 'express';
import workoutRoutes from './routes/workoutRoutes.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()

const app = express();


app.use('/api/workout', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log ("De console draait op poort 4000")
        })
    })
    .catch((error) =>{
        console.log(error)
    })


