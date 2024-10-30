import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import indexRouter from './app/routes/index.js'

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(morgan('dev'))

app.use(indexRouter)

export default app
