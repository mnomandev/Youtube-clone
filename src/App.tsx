import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './pages/Search.tsx';
import Watch from './pages/Watch.tsx';  
import Home from './pages/Home.tsx';
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/search" element={<Search />}/> 
    <Route path="/watch/:id" element={<Watch />}/> 
    <Route path="/" element={<Home />}/> 
    </Routes>
   </BrowserRouter>
  )
}
