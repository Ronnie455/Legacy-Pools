import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PoolAndSpa from './components/pages/PoolAndSpa'
import Header from './components/Header'
import Home from './components/Home'
import PoolRemodel from './components/pages/PoolRemodel'
const App = () => {
  return (
    <>
  <BrowserRouter>
  <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poolandspa" element={<PoolAndSpa />} />
        <Route path="/poolremodel" element={<PoolRemodel />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App