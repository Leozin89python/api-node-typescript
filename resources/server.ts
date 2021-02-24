const port :number = 3005

import routes from './routes/route'
import express from 'express'

const app = express()

app.use(routes)
app.listen(port)

/**instale a biblioteca npm i ts-node-dev */