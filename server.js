import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import { mongoURI } from './config/keys.js';

// Route
import itemRoute from './routes/api/items.js';

const app = express();

// Body Parser
app.use(bodyParser.json());

// DB Config
// Create keys file where the mongo URI will be stored
const db = process.env.MONGO_URI || mongoURI;

// Connecting
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    console.log(
      `> Connected to the database \n Database can be seen at http://localhost:${port}/api/items`
    )
  )
  .catch((err) => console.log(err));

// use Routes
app.use('/api/items', itemRoute);

// Set static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`\n > Server Running at http://localhost:${port} \n`)
);
