const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');


env.config();

//MONGO DB CONNECTION
//mongodb+srv://root:<password>@cluster0.dkn7f.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
      `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.dkn7f.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true 
    }
    ).then(() => {
        console.log('Database is connected');
    });


app.use(bodyParser());
app.use('/api', userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running port ${process.env.PORT}`);
})