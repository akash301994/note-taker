
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


//starting routes
app.get('/api/notes', (req, res) => res.json(notesdb));

app.post('/api/notes', (req, res) => {
  const newNoteTitle = req.body.title;
  const newNoteText = req.body.text;

  const newNote = { 
    title: newNoteTitle, 
    text: newNoteText
  };

  newNote.id = id();
  notesdb.push(newNote);
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const note = notesdb.find(note => note.id === id);
  const index = notesdb.indexOf(note);
  notesdb.splice(index, 1);
  res.json(notesdb);
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


//console logging when port is started
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});