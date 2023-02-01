import Game from 'pages/home/components/Game'
import Prod from 'pages/home/components/Prod'
import Test from 'pages/home/components/Test'
import React from 'react'
import { Route,Routes } from 'react-router-dom'

export default function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Prod/>}/>
        <Route path="/cart" element={<Test />}/>
        <Route path="/game" element={<Game/>}></Route>
    </Routes>
  )
}


