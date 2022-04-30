import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages'
import SigninPage from './pages/signin';
import CreateForm from './components/CreateForm';
import ProfilePage from './pages/ProfilePage';

function App () {
    return (
        <Router>
          <Routes>
            <Route exact path= "/" element= {<Home/>} />
            <Route exact path= "/signin" element= {<SigninPage/>} />
            <Route exact path='/signup' element={<CreateForm />} />
            <Route exact path='/profile' element={<ProfilePage />} />
          </Routes>
        </Router>
    )
};

export default App;