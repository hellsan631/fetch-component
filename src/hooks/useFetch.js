import promiseResource from './promiseResource';

export default function useFetch(url, options) {
  const uid = JSON.stringify(url) + JSON.stringify(options)
  const fetchPromise = async () => {
    const response = await fetch(url, options)

    const contentType = response.headers.get('Content-Type');
    if (
      contentType &&
      contentType.indexOf('application/json') !== -1
    ) {
      return await response.json();
    }
    return await response.text();
  }

  const [value] = promiseResource(fetchPromise, uid)

  return value;
}