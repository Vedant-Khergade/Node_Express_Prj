

//The document is the instance  of model.

//Schema defines the proper structure for our document of our collection of our database in MongoDB Atlas.

//Moongose model is  the wrapper over schema ,it helps us to perform CRUD operations easily.



const moongose= require('mongoose');

const task =  new moongose.Schema({

    name:
    {//here we are adding validators to ensure that use must put correct data.
        type:String,
        required:[true,"Must provide name"],
        trim:true,
        maxLength:[20,"Max length must less than 20"]
        
    },
    complete:
    {
        type:Boolean,
        default:false
    }
})

module.exports=moongose.model('Task',task);



