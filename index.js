const express = require('express');

const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;

const data = require('./data/chef.json')
const recipe = require("./data/recipeDetails.json")
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Server is Running again and again')
})

app.get('/data', (req, res)=>{
    res.send(data);
})

app.get('/recipe/:id', (req, res)=>{
    const id = req.params.id 
    const recipeBYChef = recipe.filter(rec=> rec.chef_id == id)
    res.send(recipeBYChef)
})

app.listen(port, ()=>{
    console.log(`Port is Awesome ${port}`);
})
