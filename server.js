'use strict';

const express = require('express');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
var active = [];
var busy = [];
var busyTime = [];

app.get('/active/:id', (req, res) => {
    // Schaltet einen Controler an
    var id = req.params.id;
    active[id] = 1;
    console.log('Active: %d', id);
    res.send("");
});

app.get('/inactive/:id', (req, res) => {
    // Schaltet einen Controler aus
    var id = req.params.id;
    active[id] = 0;
    console.log('inactive: %d', id);
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
        res.send("{\"amTelefon\": true, \"seit\": " + parseInt((Date.now() - busyTime[id]) / 1000) + "}");
    } else {
        res.send("{\"amTelefon\": false, \"seit\": 0}");
    }    
});

app.get('/Status', (req, res) => {
    // get Status
    res.send('Status!');
});

// IMMER ALS LETZTE ROUTE!!!!!!
app.get('*', (req, res) => {
    var rueckagbe = 'Visit <a href="https://app.swaggerhub.com/apis/JensFZ/BusyBoxApi/1.0.0">https://app.swaggerhub.com/apis/JensFZ/BusyBoxApi/1.0.0</a>';
    res.send(rueckagbe);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);