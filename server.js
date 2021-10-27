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

var active = [];
var busy = [];
var busyTime = [];

app.get('/active/:id', (req, res) => {
    // Schaltet einen Controler an
    var id = req.params.id;
    active[id] = 1;
    console.log('Active: %d', id)
    res.send("");
    //res.send(`active ${req.params.id}`);
});

app.get('/inactive/:id', (req, res) => {
    // Schaltet einen Controler aus
    var id = req.params.id;
    active[id] = 0;
    console.log('inactive: %d', id)
    res.send("");
});

app.get('/getActive/:id', (req, res) => {
    // Schaltet einen Controler an
    var id = req.params.id;
    if(active[id] == 1) {
        res.send("{\"Aktiv\": true}");
    } else {
        res.send("{\"Aktiv\": false}");
    }
    res.send("test: " + active[id]);
    //res.send(`active ${req.params.id}`);
});

app.get('/setBusy/:id', (req, res) => {
    //set busy
    var id = req.params.id;
    busy[id] = 1;
    busyTime[id] = Date.now();
    res.send("");
});

app.get('/releaseBusy/:id', (req, res) => {
    var id = req.params.id;
    busy[id] = 0;
    res.send("");
});

app.get('/getBusy/:id', (req, res) => {
    var id = req.params.id;
    if(busy[id] == 1) {
        res.send("{\"amTelefon\": true, \"seit\": " + busyTime[id] + "}");
    } else {
        res.send("{\"amTelefon\": false}");
    }    
});

app.get('/Status', (req, res) => {
    // get Status
    res.send('Status!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);