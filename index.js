const express = require('express');
const mongoose = require('mongoose');
const app = express();
const testRoute = require('./routes/test')
const users = require('./routes/users')
const auth = require('./routes/auth');
const posts = require('./routes/posts')
const linkedin = require('./routes/linkedin')

app.use(express.json());

mongoose.connect('mongodb://localhost/users', {useNewUrlParser:true ,  useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

  mongoose.set('useCreateIndex', true );


app.use('/',testRoute)  
app.use('/',users); //for crud endpoints 
app.use('/', auth);//for login email and pass and generating webtokens 
app.use('/',posts);//testing purpose
app.use('/',linkedin);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

                                                                                                                                                                                                                    
  
