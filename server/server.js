const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (require, response) => {
    response.send("<h1>Server is ready.</h1>")
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})