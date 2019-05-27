function commentController(Comment) {
  function post(req, res) {
    let responseError = null;
    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      const value = item[1];
      if (!value) {
        responseError = {
          error: `${key}.required`,
          field: key
        };
      }
    });
    if (responseError) {
      res.status(400);
      return res.send(responseError);
    }
    const comment = new Comment(req.body);
    comment.save();
    res.status(201);
    return res.json(comment);
  }

  function get(req, res) {
    const query = {};
    if (req.query.date) {
      query.date = req.query.date;
    }
    Comment.find(query).sort({ date: 'descending' })
      .exec((err, comment) => {
        if (err) {
          return res.send(err);
        }
        return res.json(comment);
      });
  }

  function getById(req, res, next) {
    Comment.findById(req.params.commentId, (err, comment) => {
      if (err) {
        return res.send(err);
      }
      if (comment) {
        req.comment = comment;
        return next();
      }
      return res.sendStatus(404);
    });
  }

  function getByRating(req, res) {
    Comment.find({ rating: { $eq: req.params.rating } })
      .sort({ date: 'descending' })
      .exec((err, comment) => {
        if (err) {
          return res.send(err);
        }
        return res.json(comment);
      });
  }

  function put(req, res) {
    const { comment } = req;
    comment.message = req.body.message;
    comment.user = req.body.user;
    comment.rating = req.body.rating;
    comment.session = req.body.session;
    comment.date = req.body.date;
    req.comment.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.json(comment);
    });
  }

  function patch(req, res) {
    const { comment } = req;
    // eslint-disable-next-line no-underscore-dangle
    if (req.body._id) {
      // eslint-disable-next-line no-underscore-dangle
      delete req.body._id;
    }
    Object.entries(req.body).forEach((item) => {
      const key = item[0];
      const value = item[1];
      comment[key] = value;
    });
    req.comment.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.json(comment);
    });
  }

  function deleteComment(req, res) {
    req.comment.remove((err) => {
      if (err) {
        return res.send(err);
      }
      return res.sendStatus(204);
    });
  }

  return {
    post,
    get,
    getById,
    getByRating,
    put,
    patch,
    deleteComment
  };
}

module.exports = commentController;
