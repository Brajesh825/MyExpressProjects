require('dotenv').config()

//async errors
require('express-async-errors')

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound =require('./middleware/not-found')

const port = 3000

// middleware
app.use(express.json())

// routes
app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')
})

app.use('/api/v1/products',productRouter)
// Product route

app.use(notFound)
app.use(errorHandlerMiddleware)

//Start
const start = async () =>{
    try {
        //Connect DB
        await connectDB(process.env.MONGO_URI)

        app.listen(port,()=>{
            console.log(`Server listening on port ${port}`)
        }) 
    } catch (error) {
            console.log(error);
    }
}

start()