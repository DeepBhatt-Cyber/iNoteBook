const connectToMongoose = require('./db');

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

//A simple route
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Connect to the database
connectToMongoose();
