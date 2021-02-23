const port = 3002

const { uuid } = require('uuidv4')

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))


/**valores a receber */
const projects = []

app.get('/projects',(request,response)=>{
    const { title } = request.query

    /**valores obtidos*/
   return response.json(projects)
})

app.post('/projects',(request,response)=>{
  /**desestruturação de valores obtidos no corpo da requisição*/  
  const {title, owner} = request.body

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
  return response.json(project)
})

app.put('/projects/:id',(request,response)=>{
     /*id obtido como parametro no corpo da requisição*/
   const { id } = request.params
   
   /**desestruturação de valores obtidos no corpo da requisição*/  
   const {  title, owner  } = request.body
   
   /**metodo de comparação de objetos pelo id*/
   const projectIndex = projects.findIndex(project => project.id === id)
   if(projectIndex < 0){
       return response.status(400).json({ error:'project not found' })
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
   return response.json(project)
})

app.delete('/projects/:id',(request,response)=>{
   /**id a ser encontrado como parametro */
   const { id } = request.params
   

    /**metodo de comparação de objetos pelo id*/
    const projectIndex = projects.findIndex(project => project.id === id)
    if(projectIndex < 0){
    return response.status(400).json({ error:'project not found' })
    }

    /**metodo de exclusão pelo indice no array */
    projects.splice(projectIndex , 1)
    return response.status(204).json([])
})

app.listen(port,() =>{
    console.log(`online into port: ${port}`)
}) 