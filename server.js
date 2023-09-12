const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const notesDb = require('./Develop/db/db.json');

const app = express();

