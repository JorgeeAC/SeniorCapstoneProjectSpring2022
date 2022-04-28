import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages'
import SigninPage from './pages/signin';
import CreateForm from './components/CreateForm';

function App () {
    return (
        <Router>
          <Routes>
            
            <Route  path = "/" element = {<Home/>} exact />
            <Route  path = "/signin" element = {<SigninPage/>} exact />
            <Route exact path='/signup' element={<CreateForm />} />
          </Routes>
        </Router>
    )
};

export default App;