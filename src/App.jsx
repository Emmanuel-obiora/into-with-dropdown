import React from 'react';
import './styles.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NoPage from './Components/NoPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/features' element={<Home />} />
          <Route path='/company' element={<Home />} />
          <Route path='/careers' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='/login' element={<Home />} />
          <Route path='/register' element={<Home />} />
          <Route path="*" exact  element={<NoPage/>} />
        </Routes>
      </Router>
  )
}

export default App