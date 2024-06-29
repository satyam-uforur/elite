const dbconnect= require('./mclient');
const express = require('express');
const app=express();

const path=require('path')
const dirpath=path.join(__dirname,)

app.use(express.static(dirpath))

function data()
{
   
    
    console.log("enter")
    insert();
    
    
}

async function insert(){
    const db=await dbconnect;
    const result= await db.insertOne({name:"sa3",password:'xmm'})
    console.log("exit")  
    //console.log(result)
    if(result.acknowledged)
        {
            console.log('inserted successfully');
        }
    
    document.write(name1 + '' + pass)
}

  

app.listen(5000)