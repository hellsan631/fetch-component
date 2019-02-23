import React, { Fragment, lazy } from 'react'
import Title from '../components/Title'
import Link from '../components/Router/Link'

const Username = lazy(() => import('../components/Username'))
const Email = lazy(() => import('../components/Email'))

export default function Help() {
  return (
    <Fragment>
      <Title id="app-title" />
      <Username />
      <Email />
      <Link href="/">Home</Link> 
    </Fragment>
  )
}