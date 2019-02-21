import { useEffect, useState } from 'react'
import deepEquals from 'deep-equal'
import FakeAPI from '../services/FakeAPI'
import useFetch from '../hooks/useFetch'

// Uses API to get username, and update that username via state hooks.
export default function useUsername() {
  const defaultUsername = useFetch(FakeAPI.getUsernameUrl(), FakeAPI.getOptions())
  const [username, setUsername] = useState(defaultUsername)

  useEffect(() => {
    if (!deepEquals(username, defaultUsername)) {
      const request = FakeAPI.updateUsername(username)

      return () => {
        // Abort requests on rerenders if they haven't persisted.
        if (request && request.controller) {
          request.controller.abort()
        }
      }
    }
  }, [username])

  return [username, setUsername]
}
