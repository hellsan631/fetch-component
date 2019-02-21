import { useEffect, useState } from 'react'
import localForage from 'localforage'
import promiseResource from './promiseResource'

export default function useLocalForage(key, defaultValue) {
  const localForagePromise = async () => {
    return await localForage.getItem(key)
  }
  const [value] = promiseResource(localForagePromise, key)
  const [statedValue, setStatedValue] = useState(value || defaultValue)
  
  useEffect(() => {
    localForage.setItem(key, statedValue)
  }, [statedValue])

  return [statedValue, setStatedValue]
}