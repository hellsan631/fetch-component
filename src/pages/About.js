import React, { Fragment, lazy } from 'react'
import Title from '../components/Title'
import Link from '../components/Router/Link'
const Username = lazy(() => import('../components/Username'))

export default function About() {
  return (
    <Fragment>
      <Title id="app-title" />
      <Username />
      <Link href={`/help/someId`}>Help Me</Link> 
    </Fragment>
  )
}