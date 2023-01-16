import Card from 'pages/home/components/Card'
import Test from 'pages/home/components/Test'
import React from 'react'
import { Route,Routes } from 'react-router-dom'

export default function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Card/>}/>
        <Route path="/cart" element={<Test />}/>
    </Routes>
  )
}


