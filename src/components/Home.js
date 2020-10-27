import React, { useContext, useState, useEffect } from 'react';
import DefaultTheme from './themes/DefaultTheme'
import Saas from './themes/Saas'
import Healthcare from './themes/Healthcare';
import { ThemeContext } from './ThemeContext';
import { ListGroup } from 'react-bootstrap';
import API from '../api/APIUtil'



const Home = (props) => {

    const {value, setValue} = useContext(ThemeContext)

    const [state, setState] = useState({
        themeValue: value
    })

    const myApi = new API()

    // console.log(myApi.apiCall())



    function displayTheme() {
        if (localStorage.getItem('theme') === 'saas') {
            return <Saas />
        } else if (localStorage.getItem('theme') === "healthcare") {
                return <Healthcare /> 
        } else {
            return <DefaultTheme />
        }
    }

        return (
            <div>
                {displayTheme()}
            </div>
        )
}

export default Home;
