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

app.get('/active/:id', (req, res) => {
    // Schaltet einen Controler an
    res.send(`active ${req.params.id}`);
});

app.get('/inactive/:id', (req, res) => {
    // Schaltet einen Controler aus
    res.send(`inactive ${req.params.id}`);
});

app.get('/setBusy/:id', (req, res) => {
    //set busy
    res.send(`${req.params.id} Busy!`);
});

app.get('/releaseBusy/:id', (req, res) => {
    // release busy
    res.send(`${req.params.id} release!`);
});

app.get('/Status', (req, res) => {
    // get Status
    res.send('Status!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);