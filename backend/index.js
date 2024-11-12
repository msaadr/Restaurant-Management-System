const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    try {
        res.send('Hello World!');
    } catch (error) {
        console.error('Error in / route:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port port!`);
});