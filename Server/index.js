const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
const port = 27017


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.muahx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const productCollection = client.db("chaldal").collection("products");
    const orderCollection = client.db("chaldal").collection("orders");
    const adminCollection = client.db("chaldal").collection("adminProducts");
        if (err) {
            console.log("database not connected", err);
        } else {  
            app.post('/add-products', (req, res) => {
                const products = req.body;
                console.log(products);
                adminCollection.insertOne(products)
                  .then(result => {
                      console.log(result);
                    res.send(result.insertedCount > 0)
                  })
              }) 
              app.get('/products', (req, res) => {
                productCollection.find({})
                .toArray((err, document)=>{
                    res.send(document)
                })
              }) 
            app.post('/orders', (req, res) => {
                const order = req.body;
                orderCollection.insertOne(order)
                  .then(result => {
                      console.log(result);
                    res.send(result.insertedCount > 0)
                  })
              })
              app.get('/order-details', (req, res) => {
                const order = req.body;
                orderCollection.find({email: req.query.email})
                  .toArray((err, document) =>{
                      res.send(document);
                  })
              })

            app.get('/', (req, res) => {
                res.send('Hello World')
            })

        }
});

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})