
const express = require('express');

const router = express.Router();

const {
    createTask,
    getAllTasks,
    getParticularTask,
    deleteTask,
    updateTask,
    
    
} = require('../controllers/tasksC');





router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getParticularTask);
router.delete('/:id',deleteTask);
router.patch('/:id',updateTask);



module.exports = router;