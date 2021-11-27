// Environment Variable
require('dotenv').config()
require('express-async-errors')

// Express
const express = require('express')
const app = express();

// rest of the packages
const morgan = require('morgan')

// Database
const connectDB = require('./db/connect')

// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(morgan('tiny'))
app.use(express.json())

// routes
app.get('/',(req,res)=>{
    res.send('e-commerce-api Testing')
})

// Error Handlers
app.use(notFoundMiddleware)
//  Not found should come before error handlers
//  Error Handler middleware handle error i.e thrown from one of the routes
app.use(errorHandlerMiddleware)

// Port
const port = process.env.PORT || 5000
const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}...`))
    }
    catch(error){
        console.log(error);
    }
}

start()