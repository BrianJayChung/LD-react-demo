import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap'
import WidgetImage from '../widget/WidgetImage'
import background from '../../images/background.png'
import Login from '../Login'

const jumboStyle = {
    backgroundImage: `url(${background})`,
    height: '50rem',
    opacity: 1,
    paddingLeft: '5rem',
    zIndex: '-2',
    backgroundPosition: 'relative',
}

const Default = (props) => {
    return (
        <Jumbotron fluid style={jumboStyle}>
            <div style={{ float: "right", paddingRight: "10rem"}}>
                <Login/>
            </div>
            <div className="w-50 p-3">
                <h1 className="display-3" style={{color: "white"}}> Support Service</h1>
                <h1 className="display-9" style={{color: "white"}}> Support Service is a revolutionary full stack support solution that allows you to focus on what matters most, your customers.</h1>
            </div>
        </Jumbotron>
    )
}

export default Default;