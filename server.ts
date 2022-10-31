import dotenv from 'dotenv'
import express, { application, Router } from 'express'
import mongoose from 'mongoose'
import indexRouter from './routes/api/index'

dotenv.config()

const app = express()

app.use(express.json({ limit: "10mb"}))
app.use(express.urlencoded({ extended: true}))
app.use('/api', indexRouter)

async function connectToDb() {                                      //Funcion para conectarse a la base de datos
    if(process.env.DB_CONNECTION_STRING) {                          //
        await mongoose.connect(process.env.DB_CONNECTION_STRING)    //
    } else {                                                        //
        console.log('No hay string de conexion')                    //
    }                                                               //
}

app.listen(process.env.PORT, () =>{                                         // Llama al puerto del archivo .env
    console.log(`Servidor inicializado en el puerto ${process.env.PORT}`)   //
    connectToDb()                                                           // Utiliza la funcion connectToDB() para conectarse a la base de datos
    .then(() => console.log('Se ha conectado con la base de datos'))        //
    .catch((err) => console.log(err))                                       // En caso de error lo atrapa y lo manda por consola
})                                                                          //

module.exports = app