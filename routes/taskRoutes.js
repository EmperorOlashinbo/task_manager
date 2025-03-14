//routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskContoller'); // Ensure this matches the actual file name

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.get('/status/:status', taskController.getTasksByStatus);
router.get('/title/:title', taskController.getTasksByTitle);
router.put('/:id', taskController.updateTask);
router.patch('/:id', taskController.updateTaskStatus);
router.delete('/:id', taskController.deleteTask);

module.exports = router;