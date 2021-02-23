const port :number = 3004

import routes from './routes/route'

import express from 'express'
const app = express()

app.use(routes)

app.listen(port)