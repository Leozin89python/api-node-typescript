const port = 3001

const { uuid } = require('uuidv4')

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

const projects = []

app.get('/projects',(req,res)=>{
   return res.json(projects)
})

app.post('/projects',(req,res)=>{
  const {title, owner} = req.body

  const id = uuid()


  const project = {
      id,
      title,
      owner
  }

  projects.push(project)
  return res.json(project)
})

app.put('/projects/:id',(req,res)=>{
   
})

app.delete('/projects',(req,res)=>{
    return res.json([
        'projeto5',
        'projeto2',
        'projeto4'
    ]) 
})

app.listen(port,() =>{
    console.log(`online into port: ${port}`)
}) 