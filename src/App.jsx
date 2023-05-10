import React from 'react';
import './styles.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NoPage from './Components/NoPage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/into-with-dropdown' element={<Home />} />
          <Route path='/into-with-dropdown/home' element={<Home />} />
          <Route path='/into-with-dropdown/features' element={<Home />} />
          <Route path='/into-with-dropdown/company' element={<Home />} />
          <Route path='/into-with-dropdown/careers' element={<Home />} />
          <Route path='/into-with-dropdown/about' element={<Home />} />
          <Route path='/into-with-dropdown/login' element={<Home />} />
          <Route path='/into-with-dropdown/register' element={<Home />} />
          <Route path="*" exact  element={<NoPage/>} />
        </Routes>
      </Router>
  )
}

export default App