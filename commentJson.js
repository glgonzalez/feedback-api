// eslint-disable-next-line no-undef
db.comment.insert([
  {
    message: 'Game is really good. Would definitely recomment',
    user: 'TestUser',
    rating: 5,
    session: 'test session',
    date: new Date(Date.now)
  },
  {
    message: 'It\'s an ok game',
    user: 'TestUser3',
    rating: 3,
    session: 'test session 2',
    date: new Date(Date.now)
  },
  {
    message: 'Terrible game. Devs should quit',
    user: 'TestUser3',
    rating: 1,
    session: 'test session 3',
    date: new Date(Date.now)
  }
]);
