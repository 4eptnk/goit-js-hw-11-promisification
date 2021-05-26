const delay = (ms) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return promise;
};

const loggerFirst = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(loggerFirst);
delay(1000).then(loggerFirst);
delay(1500).then(loggerFirst);
