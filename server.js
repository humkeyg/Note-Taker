const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const {v4: uuidV4} = require('uuid');
const fs = require('fs');
console.log(db);
const PORT = process.env.PORT ||3001;

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(db);
});

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);  

app.post('/api/notes', (req, res) => {
  console.log('Got body:', req.body);
  var note = req.body;
  note.id = uuidV4();
  db.push(note);
  fs.writeFile('./db/db.json', JSON.stringify(db), err => {
  if (err) {
    console.log(err);}
    res.json(db); 
  });
  res.json(db);
}
);

app.post('/api/notes', (req, res) => {
  console.log(req.body);
})

app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
