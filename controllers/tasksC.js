

const Task = require('../models/Task');//here 'Task' is going to be the reference of our model.




const getAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find({})// '{}' is called filter when it is empty ,it returns all documents in the array of objects. Each document is the object .
        if (!tasks) {
            return res.status(404).send('Task not found');
        }
        return res.json({ tasks });
    }
    catch (error) {

        res.send(error)

    }

}

const getParticularTask = async (req, res) => {
    const { id: taskID } = req.params;

    try {

        const task = await Task.findOne({ _id: taskID });

        if (!task) {
            return res.status(404).send("Task not found");
        }

        res.status(200).json({ task });

    }

    catch (error) {

        res.send(error);
    }


}


const createTask = async (req, res) => {

    try {
        const task = await Task.create(req.body);//need to make it await
        //Here we are making our model's instance.

        res.json({ task });
    }

    catch (error) {

        res.status(500).send("Please provide name");

    }
}//user defined middleware function.


const deleteTask = async (req, res) => {

    const { id: taskID } = req.params;

    try {

        const task = await Task.findOneAndDelete({ _id: taskID });

        if (!task) {

            return res.status(404).send('task not found');
        }

        console.log("Deleted");
        return res.status(200).json({ task });



    }
    catch (error) {
        res.status(400).send(error);

    }

}


const updateTask =async  (req, res) => {

    try {
        const { id: taskID } = req.params;

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body,{
            new: true,
            runValidators: true,
            
          })
        
    
        if (!task) {
    
           return  res.status(404).send("Task not found");
    
        }

           res.status(200).json({ task })
    
    }

     catch (error)
      {
        res.status(400).send(error);
    }

  

}

module.exports = { createTask, getAllTasks, getParticularTask, deleteTask, updateTask}




// const putTask= async (req,res)=>{

//     try {

//         const {id:taskID}=req.params;

//        const task= await Task.findOneAndUpdate({_id:taskID},
//         req.body,
//         {
//             new:true,
//             runValidators:true,
//             overwrite:true
//         });

//         if(!task){

//             return res.send(404).send("page not found");

//         }
        
//         return  res.send(200).json({task});

        
//     } 
    
//     catch (error) {
        
//         res.send(error);
//     }

// }


