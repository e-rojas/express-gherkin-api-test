const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const authenticate = (req, res, next) => {
    const username = process.env.VALID_USERNAME
    const password = process.env.VALID_PASSWORD
    if (req.query.username === username && req.query.password === password) {
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/auth', authenticate, (req, res) => {
    return res.status(200).send('Authenticated');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
