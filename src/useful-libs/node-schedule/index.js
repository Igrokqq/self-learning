const scheduler = require('node-schedule');

let count = 0;

const job = scheduler.scheduleJob('*/5 * * * * *', () => {
  count += 1;
  console.log('count', count);
});

// console.log('job', job);
