/* eslint-disable no-param-reassign */
const express = require('express');
const commentController = require('../controllers/comment.controller');

function routes(Comment) {
  const commentRouter = express.Router();
  const controller = commentController(Comment);

  commentRouter.route('/')
    .get(controller.get)
    .post(controller.post);
  commentRouter.use('/rating/:rating', controller.getByRating);
  commentRouter.use('/:commentId', controller.getById);
  commentRouter.route('/:commentId')
    .get((req, res) => res.json(req.comment))
    .put(controller.put)
    .patch(controller.patch)
    .delete(controller.deleteComment);

  return commentRouter;
}

module.exports = routes;
