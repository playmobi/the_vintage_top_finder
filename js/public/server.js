
const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:bmch852200@cluster0.bjdor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express()
const port = 3000


app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  })


  app.get('/app-test', (req, res) => {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("bedu");
        dbo.collection("alumnos").find({}).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
        //   console.log(result);
          db.close();
        });
      });

   

  })




app.get('/prueba', (req, res) => {
    res.send('Catalogo de prueba')
  })

  app.post('/prueba', (req, res) => {
    res.send('Hello Dashboard!')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
