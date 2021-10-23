'use strict';

const express = require('express');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Moin!');
});

app.get('/setBusy', (req, res) => {
    res.send('Busy!');
});

app.get('/releaseBusy', (req, res) => {
    res.send('Busy!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);