const express = require('express');

const app = express();

const users = ['Asad', 'Faruk', 'Fahim', 'firoz', 'Shanto', 'Anika'];

app.get('/', (req, res) => {
    const fruit = {
        product: 'Ada',
        price: 220
    }
    res.send(fruit)
});

app.get('/fruits/banana', (req, res) => {
    res.send({
        fruit: 'banana',
        quantitiy: 10000,
        price: 10000000
    });
})


app.get('/user/:id', (req, res) => {
    const id = req.params.id;

    // http://localhost:3000/user/1?sort=asc
    console.log(req.query.sort);
    
    const name = users[id];
    res.send({id, name});
})

app.listen(3000, () => console.log('Listening to port 3000'));