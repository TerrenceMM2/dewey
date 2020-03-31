const express = require('express');
const path = require("path");
const app = express();
const PORT = 5000;

// Middleware Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.listen(PORT, () => console.log(`Server listening @ http://localhost:${PORT}`));

module.exports = app;