const { application } = require("express");

application.get('/notes', (req, res) => {
    res.json(db.json);
});

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'index.html'));  

app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, 'index.html'));
 