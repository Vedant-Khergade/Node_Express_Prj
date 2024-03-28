
const mongoose=require('mongoose');



const connectDB=(url)=>{

    return  mongoose.connect(url);
}


module.exports=connectDB

// mongoose.connect(connect)
// .then(()=>{console.log("Database connected");})
// .catch((err)=>{console.log(err);})

