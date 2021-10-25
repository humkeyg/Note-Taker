const express = require('express');
const path = require('path');

const PORT = 3001;

app.use(express.json());

const { application } = require("express");

application.get('/api/notes', (req, res) => {
    res.json(db.json);
});

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/assets/notes.html'))
);  

app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '../public/assets/index.html'))
);

app.get('/api/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../db/db.json'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);