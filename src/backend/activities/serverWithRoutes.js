const port = 3001

const { uuid } = require('uuidv4')

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))


/**valores a receber */
const projects = []

app.get('/projects',(req,res)=>{
    /**valores obtidos*/
   return res.json(projects)
})

app.post('/projects',(req,res)=>{
  /**desestruturação de valores obtidos no corpo da requisição*/  
  const {title, owner} = req.body

  /**id criado automaticamente para cada objeto no corpo da requisição*/
  const id = uuid()

  /**dados  para inserção no corpo da requisição*/  
  const project = {
      id,
      title,
      owner
  }
  /**obs*  como
   * a chave e os valores 
   * são os mesmos, não há
   * necessidade de replicar os nomes 
   */

  /*adição dos dados obtidos no corpo da requisição dentro do array*/  
  projects.push(project)

  /**retorno da resposta como json */
  return res.json(project)
})

app.put('/projects/:id',(req,res)=>{
     /*id obtido como parametro no corpo da requisição*/
   const { id } = req.params
   
   /**desestruturação de valores obtidos no corpo da requisição*/  
   const {  title, owner  } = req.body
   
   /**metodo de comparação de objetos pelo id*/
   const projectIndex = projects.findIndex(project => project.id === id)
   if(projectIndex < 0){
       return res.status(400).json({ error:'project not found' })
   }
   
   /**objeto a ser modificado*/
   const project ={
            id,
            title,
            owner
   }

   /**posição do objeto a partir da consulta, a ser modificado*/
   projects[projectIndex] = project

   /**retorno do objeto alterado */
   return res.json(project)
})

app.delete('/projects/:id',(req,res)=>{
   /**id a ser encontrado como parametro */
   const { id } = req.params
   
   /**desestruturação de valores obtidos no corpo da requisição*/  
   const { title, owner } = req.body
   
   /**objeto no corpo da requisição a ser deletado */
   const project = {
            id,
            title,
            owner
   } 

    /**metodo de comparação de objetos pelo id*/
   const projectIndex = projects.findIndex(project => {
            project.id === id
            if(!project.id){
                return res.status(400).json({error:'object not found'})
            }
   })

    /**posição do objeto a partir da consulta, a ser modificado*/
   projects[projectIndex] = project

   /**metodo de exclusão pelo indice no array */
   projects.splice(projects[projectIndex], 1)
   return res.json({msg:'deleted with success'})


   /**
    * resposta do prof°
    * 
    * const { id } = req.params
    * 
    *const projectIndex = projects.findIndex(project => project.id === id)
        if(projectIndex < 0){
        return res.status(400).json({ error:'project not found' })
        }
    * 
     projects.splice(projectIndex , 1)
    * 
    * return res.status(204).json([])
    */
})

app.listen(port,() =>{
    console.log(`online into port: ${port}`)
}) 