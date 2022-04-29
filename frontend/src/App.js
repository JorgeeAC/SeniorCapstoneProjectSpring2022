import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages'
import SigninPage from './pages/signin';
import CreateForm from './components/CreateForm';
import CustomerPortal from './pages/CustomerPortal';

function App () {
    return (
        <Router>
          <Routes>

            <Route  path = "/" element = {<Home/>} exact />
            <Route  path = "/signin" element = {<SigninPage/>} exact />
            <Route exact path='/signup' element={<CreateForm />} />
            <Route exact path='/profile' element={<CustomerPortal />} />

          </Routes>
        </Router>
    )
};

export default App;