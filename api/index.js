import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB is connected');
}).catch(err => {
    console.log(err);
})

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

// cara pertama
// const router = express.Router()

// app.use('/api/user', router.get('/test', (req, res) => {
//     res.json({message: 'API is Working'})
// }))

//cara kedua

app.use('/api/user', userRoutes)