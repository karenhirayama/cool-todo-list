import React from 'react'
import { Button } from '../components'

export default function Home() {

  const logIn = () => {
console.log('clicked')
  }
  return (
    <div>
      <Button onClick={logIn} text={'Log in'} />
    </div>
  )
}
