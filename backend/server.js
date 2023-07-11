const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('connected to mongodb');
})
.catch((err)=>{
    console.log('db connection error'+err);
})


app.use(cors());

const productSchema = new mongoose.Schema({
  pname: String,
  pdesc: String,
  pprice: Number
});


const Product = mongoose.model('Product', productSchema);

app.use(express.json());


app.post('/products',(req,res)=>{
    const productData=req.body

     const newProduct = new Product(productData);

     newProduct.save()
     .then(()=>{
        console.log('product stored successfull');
     })
     .catch((err)=>{
        console.log('error while storing products'+err);
     })
})

app.get('/products', (req, res) => {
    // Retrieve all products from the database
    Product.find()
      .then((products) => {
        res.json(products);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to retrieve products' });
      });
    })

app.delete('/products/:id',(req,res)=>{
  const prodId=req.params.id

  Product.deleteOne({_id:prodId})
  .then(()=>{
    console.log('product deleted');
  })
  .catch((err)=>{
    console.log('error while deleting'+err);
  })
})

app.delete('/products',(req,res)=>{

  Product.deleteMany({})
  .then(()=>{
    console.log('all product deleted');
  })
  .catch((err)=>{
    console.log('error while deleting'+err);
  })
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});