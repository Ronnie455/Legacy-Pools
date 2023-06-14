import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App