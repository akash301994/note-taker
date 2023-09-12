
// importing frameworks 
const express = require('express');
const path = require('path');

//initialzing express
const app = express();
const notesdb = require('./db/db.json');
const id = require('uuid').v4;
const PORT = process.env.PORT || 3001;


//using middleware to parse incoming requests then config to json data.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

