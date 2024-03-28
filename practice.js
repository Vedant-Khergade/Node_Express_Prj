
// const express = require('express');

// const app = express();

// const connectDB = require('./db/connect');

// require('dotenv').config();


// app.use(express.json());

// app.use(express.urlencoded({ extended: false }));


// const port = 3000;

// const start = async () => {

//     try {

//         await connectDB(process.env.Mongo_String);

//         console.log(("Connected"));

//         app.listen(port);

//         console.log((`Server is listening at port ${port}`));



//     } catch (error) {

//         console.log(error);

//     }
// }

// start();


// //JavaScript is synchronous by default.

// //Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.


// //There are mainly three ways in which we can code asynchronism in JavaScript: callback functions, promises, and async-await.