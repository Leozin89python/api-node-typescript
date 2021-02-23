const port :number = 3004

import express from 'express'
const app = express()

app.use('/',(req,res)=>{
	res.json({
		msg:'online'
	})
})

app.listen(port)