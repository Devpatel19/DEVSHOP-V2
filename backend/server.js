import path from 'path'
import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
import  connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

const app = express()
import cors from 'cors'
app.use(cors())

dotenv.config()

connectDB()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/upload',uploadRoutes)

app.get('/api/config/paypal',(req,res) => 
    res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname,'/uploads')))

if(process.env.NODE_ENV === 'production'){
    // app.use(express.static(path.join(__dirname,'/basic/build')))
    // app.get('*', (req, res) =>
    //     res.sendFile(path.resolve(__dirname,'basic','build','index.html'))
    // )
}else{
    app.get('/',(req,res) => {
        res.send('API Is Running...')
    })
}


app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running ${process.env.NODE_ENV} on part ${PORT}`.yellow.bold))