import pathToRegexp from 'path-to-regexp'

function compilePath(path, options) {
  const keys = []
  const regexp = pathToRegexp(path, keys, options)
  return { regexp, keys }
}

export default function matchPath(path, options = {}) {
  const { pathname } = window.location
  const { exact = false, strict = false, sensitive = false } = options

  const { regexp, keys } = compilePath(path, {
    end: exact,
    strict,
    sensitive,
  })
  const match = regexp.exec(pathname)

  if (!match) {
    return false
  }

  const [url, ...values] = match
  const isExact = pathname === url

  if (exact && !isExact) {
    return false
  }

  return {
    path, // the path used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact, // whether or not we matched exactly
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = values[index]
      return memo
    }, {})
  }
}