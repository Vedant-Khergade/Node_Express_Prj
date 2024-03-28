


const express = require('express');

const app = express();

const connectDB = require('./db/connect');

require('dotenv').config();//here we installed dotenv package

const tasks = require('./routes/tasks');


app.use(express.json());

app.use(express.static('./public'));//To connect frontend with backend, express.static() middleware is required.

const notFound=require('./middleware/notFound');

//app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/tasks', tasks);

app.use(notFound);


const port=5000;


const start = async () => {

    try {
        await connectDB(process.env.Mongo_String);//here we importing dtabase link from dotenv file and exporting it to the moongose.connect() method in connect.js file  in order to connect our database to our app.
        
        console.log("database connected");
        app.listen(port);
        console.log(`Server is listening at port ${port}`);
    }

    catch (error) {
        console.log(error);
    }

}


start();
