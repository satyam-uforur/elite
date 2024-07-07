const { MongoClient }= require('mongodb')
const url='mongodb://localhost:27017';
const client=new MongoClient(url);

async function dbconnect()
{
    let connection= await client.connect();
    db= connection.db('dbtrial');
    return db.collection('colltrial')
}

module.exports=dbconnect();