require('dotenv').config()
const express  = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

//express app
const app= express();

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

//routes

app.use('/api/workouts',workoutRoutes);

//connect 
mongoose.connect(`mongodb+srv://anjalipatelbvn:anjali@mernapp.l5lgnuh.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp`)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Server started at port and DB connected ',process.env.PORT);
    })
})
.catch((errorr)=>{
    console.log(errorr)
})

//listen 


