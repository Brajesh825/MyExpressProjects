const express = require('express')
const app = express()
const users = require('./routes/users')
const connectDB =require('./db/connect')
require('dotenv').config()
const notFound =require('./middleware/not-found')
const port = process.env.PORT || 3000

//Middleware
app.use(express.json())

//Routes
app.use('/api/v1/users',users)
app.use(notFound)
//Initialiser
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error);
    }
}

start();