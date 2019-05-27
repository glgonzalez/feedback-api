const should = require('should');
const sinon = require('sinon');
const commentController = require('../controllers/comment.controller');

describe('Comment Controller Tests:', () => {
  describe('Post', () => {
    it('should not allow an empty user on post', () => {
      const Comment = (comment) => {
        this.save = () => {};
      };
      const req = {
        body: {
          message: 'test comment'
        }
      };

      const res = {
        status: sinon.spy(),
        send: sinon.spy(),
        json: sinon.spy()
      };

      const controller = commentController(Comment);
      controller.post(req, res);

      res.status.calledWith(400).should.equal(true, `Bad Status ${res.status.args[0][0]}`);
      res.send.calledWith({ error: 'user.missing' }).should.equal(true);
    });
  });
});
