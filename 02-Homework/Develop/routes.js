const { application } = require("express");

application.get('/api/notes', (req, res) => {
    res.json(db.json);
});

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/assets/index.html'));  

app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '../public/assets/index.html'));
