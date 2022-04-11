import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/home"
import Profile from "./components/profile"
import Portfolio from "./components/portfolio"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/portfolio' element={<App />}>
          <Route path='/portfolio/home' element={<Home />} />
          <Route path='/portfolio/profile' element={<Profile />} />
          <Route path='/portfolio/projects' element={<Portfolio />} />
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
