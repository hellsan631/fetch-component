import { useEffect } from 'react'
import promiseResource from './promiseResource'

export default function usePromise(promise, uid) {
  const [value, resource] = promiseResource(promise, uid)

  useEffect(() => {
    return () => {
      resource.cleanup()
    }
  })

  return value
}