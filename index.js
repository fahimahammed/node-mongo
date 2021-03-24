const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
const users = ['Asad', 'Faruk', 'Fahim', 'firoz', 'Shanto', 'Shirin+Jakaria'];

app.get('/', (req, res) => {
    const fruit = {
        product: 'Ada',
        price: 220
    }
    res.send(fruit)
});

// app.get('/fruits/banana', (req, res) => {
//     res.send({
//         fruit: 'banana',
//         quantitiy: 10000,
//         price: 10000000
//     });
// })


app.get('/user/:id', (req, res) => {
    const id = req.params.id;

    // http://localhost:3000/user/1?sort=asc
    console.log(req.query.sort);
    
    const name = users[id];
    res.send({id, name});
})

//post
app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 55;
    res.send(user);
    console.log('data recieved',req.body);
})

app.listen(3001, () => console.log('Listening to port 3001'));