import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import Project from '../Pages/Project'
import Dashboard from '../Pages/Dashboard'
import About from '../Pages/About'
import Home from '../Pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path='/sign-in' element = {<SignIn />} />
        <Route path='/sign-up' element = {<SignUp />} />
        <Route path='/dashboard' element = {<Dashboard />} />
        <Route path='/project' element = {<Project />} />

      </Routes>
    </BrowserRouter>
  )
}
