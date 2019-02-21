import React from 'react'
import usePromise from '../hooks/usePromise';
import FakeAPI from '../services/FakeAPI';

// Just populates a field
export default function Title({ id }) {
  const data = usePromise(FakeAPI.getTitle(), id)

  return (
    <h1>{data.title}</h1>
  )
}