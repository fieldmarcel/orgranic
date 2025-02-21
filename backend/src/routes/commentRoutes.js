import express from 'express';

import {  createComment }  from '../controllers/commentController.js';

const router = express.Router();

// Route to get all comments
// router.get('/', getComments);

// Route to add a new comment
router.post('/:id', createComment);

// Route to delete a comment by ID
// router.delete('/:id', deleteComment);

export default router;