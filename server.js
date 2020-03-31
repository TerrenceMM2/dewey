const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/test', (req, res) => {
    res.json({ msg: 'Hello from the back on AWS!' });
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
});
