var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
   extended: true 
}));

app.get('/tweets', (req, res) => {
    res.send("Welcome to my Tweet!");
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

