const express = require('express');

const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;

const data = require('./data/chef.json')

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Server is Running again and again')
})

app.get('/data', (req, res)=>{
    res.send(data);
})

app.listen(port, ()=>{
    console.log(`Port is Awesome ${port}`);
})
