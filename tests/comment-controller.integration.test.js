require('should');
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../app.js');

const Comment = mongoose.model('Comment');
const agent = request.agent(app);

describe('Comment Crud Test', () => {
  it('should allow a comment to be posted and return _id', (done) => {
    const commentPost = {
      message: 'test comment',
      user: 'testUser',
      rating: 5,
      session: 'test session'
    };

    agent.post('/api/comments')
      .send(commentPost)
      .expect(200)
      .end((err, results) => {
        results.body.should.have.property('_id');
        done();
      });
  });

  afterEach((done) => {
    Comment.deleteMany({}).exec();
    done();
  });

  after((done) => {
    mongoose.connection.close();
    app.server.close(done());
  });
});
