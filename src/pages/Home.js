import React, { Fragment } from 'react'
import Title from '../components/Title'
import Link from '../components/Router/Link';

export default function Home() {
  return (
    <Fragment>
      <Title id="app-title" />
      <Link href="/about">About Me</Link> 
    </Fragment>
  )
}