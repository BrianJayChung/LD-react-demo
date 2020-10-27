import React, { useState, useMemo } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Settings from './components//settings/Settings';
import Healthcare from './components/themes/Healthcare';
import Saas from './components/themes/Saas';
import Header from './components/Header';
import Login from './components/Login';
import { ThemeContext } from './components/ThemeContext'
import './components/Footer.css'
import Footer from './components/Footer'
import { withLDProvider } from 'launchdarkly-react-client-sdk';

const App = (props) => {
    
    const [value, setValue] = useState(localStorage.getItem('theme'))
    return (
        <div className="page-container">
        <div clasName="content-wrap">
            <BrowserRouter>
                    <ThemeContext.Provider value={{ value, setValue }}>                        
                        <Header />
                        <Route path="/" exact component={Home}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/settings" exact component={Settings} />
                        <Route path="/healthcare" exact component={Healthcare} />
                        <Route path="/saas" exact component={Saas} />
                        <Route path="/login" exact component={Login} />
                        <Footer />
                    </ThemeContext.Provider>
            </BrowserRouter>
        </div>
        </div>                
    )
}
    
  export default withLDProvider({ 
    clientSideID: '5c48fafe806cbb419f2c6bd7',
    user: {
        "key": "user_key",
        "name": "User Name",
        "email": "User@email.com"
    }
  })(App);