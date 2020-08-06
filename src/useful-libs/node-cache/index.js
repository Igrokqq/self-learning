const NodeCache = require('node-cache');

const cache = new NodeCache({
  stdTTL: 100,
  checkperiod: 120,
});

const obj = {
  username: 'Tom',
};

const userKeyInCache = 'user';
const cachedUserTTL = 10;

// cache the object with username Tom on 10s under key "user"
cache.set(userKeyInCache, obj, cachedUserTTL);

const intervalId = setInterval(() => {
  const user = cache.get(userKeyInCache);

  console.log('cached user', user);

  if (!user) {
    clearInterval(intervalId);
  }
}, 5000);
