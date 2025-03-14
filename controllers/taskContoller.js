//controllers/taskController.js

const { query } = require('../models/taskModel');

exports.createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const results = await query('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, status]);
        res.status(201).json({ id: results.insertId, title, description, status });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const results = await query('SELECT * FROM tasks');
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await query('SELECT * FROM tasks WHERE id = ?', [id]);
        if (results.length === 0) {
            res.status(404).json({ message: 'Task not found' });
        } else {
            res.status(200).json(results[0]);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getTasksByStatus = async (req, res) => {
    try {
        const status = req.params.status;
        const results = await query('SELECT * FROM tasks WHERE status = ?', [status]);
        if (results.length === 0) {
            res.status(404).json({ message: 'Tasks not found' });
        } else {
            res.status(200).json(results);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTasksByTitle = async (req, res) => {
    try {
        const title = req.params.title;
        const results = await query('SELECT * FROM tasks WHERE title = ?', [title]);
        if (results.length === 0) {
            res.status(404).json({ message: 'Tasks not found' });
        } else {
            res.status(200).json(results);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, status } = req.body;
        const results = await query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [title, description, status, id]);
        if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Task not found' });
        } else {
            res.status(200).json({ id, title, description, status });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await query('DELETE FROM tasks WHERE id = ?', [id]);
        if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Task not found' });
        } else {
            res.status(200).json({ message: 'Task deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

