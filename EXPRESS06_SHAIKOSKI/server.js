//aprimorar a apresentação dos resultados

const express = require('express')
const mysql = require('mysql2')
const mysql_config = require('./mysql_config');
const functions = require('./functions')
const cors = require('cors')

const app = express()
app.listen(3000,()=>{
    console.log("Servidor no ar")
})

//mysql conection

const conection = mysql.createConnection(mysql_config)

//criar uma função que ira parametrizar as respostas da API
//para utilizar todos os endpoints vemos uma função para isso 

//consumindo  cors

app.use(cors());

app.get('/',(req,res)=>{
    //criar um objeto result para todos os endpoints da api
    connection.querry("SELECT * FROM tasks",(err,results)=>{
        if(err){
            res.json (functions.response('error','Erro: '+err.message))
        } else{
            res.json(functions.response('sucess',"tasks listadas com sucesso",results))
        }
    
       })
    })

//executar a conexão
   