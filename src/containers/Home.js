import React from 'react'
import { getSiteProps } from 'react-static'
//
import PrimaryPage from '../components/PrimaryPage';
// import logoImg from '../logo.png'

export default getSiteProps(() => (
  <div>
    <PrimaryPage />
    {/* <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" /> */}
  </div>
))
