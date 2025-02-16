const connectToMongoose = require('./db');

const express = require('express')
const app = express()
const port = 5000

app.use(express.json());

//A simple route
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// listen on port 5000
app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})

// Connect to the database
connectToMongoose();
