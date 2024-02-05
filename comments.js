//Create web server
const express = require('express');
const app = express();
app.use(express.json());

//Data
let comments = [
    {id: 1, author: "John", body: "I love this product!"},
    {id: 2, author: "Mary", body: "I love this product too!"},
    {id: 3, author: "Tom", body: "I love this product more!"}
];

//Get all comments
app.get('/api/comments', (req, res) => {
    res.send(comments);
});

//Get a comment
app.get('/api/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found');
    res.send(comment);
});

//Create a comment
app.post('/api/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
