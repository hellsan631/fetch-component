const promises = [];

const promiseResource = (thenable, uid) => {
  for (const resource of promises) {

    // The request hasn't changed since the last call.
    if (uid === resource.uid) {

      // If an error occurred,
      if (resource.hasOwnProperty('error')) {
        throw resource.error;
      }

      // If a response was successful,
      if (resource.hasOwnProperty('value')) {
        return [ resource.value, resource ];
      }
      throw resource.promise;
    }
  }

  // The request is new or has changed.
  const resource = {
    promise: thenable()
        .then(value => {
          resource.value = value;
        })
        .catch(e => {
          resource.error = e;
        }),
    cleanup: () => {
      const index = promises.indexOf(resource);
      if(index !== -1) {
        promises.splice(index, 1);
      }
    },
    uid,
  };
  promises.push(resource);
  
  throw resource.promise;
};

export default promiseResource;