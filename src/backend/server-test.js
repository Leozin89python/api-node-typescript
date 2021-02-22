const port = 3000

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

//http://localhost:3000/?title=node&owner=Aluizio

app.get('/',(req,res)=>{
    const {title} = req.query
    const query     = req.query

   console.log(title)
   console.log( query)
   return res.json([
       'projeto1',
       'projeto2',
       'projeto3'
   ])
})

app.post('/',(req,res)=>{
    const body = req.body

    console.log(body)
    return res.json([
        'projeto1',
        'projeto2',
        'projeto3',
        'projeto4'
    ]) 
})

app.put('/:id',(req,res)=>{
    const par    = req.params
    const { id } = req.params

    console.log(id)
    console.log(par)
    return res.json([
        'projeto5',
        'projeto2',
        'projeto3',
        'projeto4'
    ]) 
})

app.delete('/',(req,res)=>{
    return res.json([
        'projeto5',
        'projeto2',
        'projeto4'
    ]) 
})

app.listen(port,() =>{
    console.log(`online into port: ${port}`)
}) 