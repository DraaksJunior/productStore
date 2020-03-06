
const mongo = require('mongodb').MongoClient
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;




const uri = "mongodb+srv://draaks:pa1n1scak369@cluster0-qvztm.mongodb.net/test?retryWrites=true&w=majority";
/**mongo.connect(uri, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company I", address: "Highway 3" };
  dbo.collection("customers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
**/



app.get('/addProduct', function (req, res) {
  res.sendFile(path.join(__dirname + '/addProduct.html'));
  app.use(express.static('public'));

});

const urlEncodedParser = bodyParser.urlencoded({ extended: false });


app.post("/addProduct", urlEncodedParser, function (req, res) {
    mongo.connect(uri, { useUnifiedTopology: true }, function (err, db) {
      if(err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("produtos").insertOne(req.body, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
});
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/store.html'));
  console.log(__dirname);
  app.use(express.static('public'));
});

app.use(express.static(__dirname + 'public'));



app.get('/contacts', function (req, res) {
  res.sendFile(path.join(__dirname + '/contacts.html'));
});

app.get('/products', function (req, res) {
  res.sendFile(path.join(__dirname + '/products.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))