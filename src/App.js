import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LearnMore from './components/pages/LearnMore'
import Header from './components/Header'
import Home from './components/Home'
import PoolRemodel from './components/pages/PoolRemodel'
import Gallery from './components/pages/Gallery'
const App = () => {
  return (
    <>
  <BrowserRouter>
  <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/poolremodel" element={<PoolRemodel />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App