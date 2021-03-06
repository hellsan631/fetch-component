// Caches for all of the premises, so they don't have to be 
// executed again during component re-renders
const promises = {}

/**
 * Throws is a promise for React Suspense to catch.
 * When that promise results, returns the value to use synchronously
 *
 * @param {*} thenable Premise-based resource whose value will be synchronously given
 * @param {*} uid Unique Id to avoid duplicate promises
 * @returns [resource.value, resource]
 */
const promiseResource = (thenable, uid) => {
  if (!uid) {
    throw new Error('Unique ID must be present for promise tracking')
  }

  // Check to see if the uid matches a request already in cache
  if (promises[uid]) {
    const resource = promises[uid];

    // If an error occurred.
    if (resource.hasOwnProperty('error')) {
      throw resource.error;
    }

    // If a promise was successful,
    if (resource.hasOwnProperty('value')) {
      return [resource.value, resource];
    }

    // If nothing has changed.
    throw resource.promise;
  }

  // The promise is new or has changed.
  const resource = {
    promise: thenable()
        .then(value => {
          resource.value = value
        })
        .catch(e => {
          resource.error = e
        }),

    // Allow cleanup to occur for component unmounts
    cleanup: () => {
      if (promises[uid]) {
        delete promises[uid];
      }
    },
    uid,
  };

  // Add promise to cache
  promises[uid] = resource;
  
  // Throw new promise
  throw resource.promise;
}

export default promiseResource;
