const express = require('express');

const app = express();

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

app.listen(3000, () => console.log('Listening to port 3000'));