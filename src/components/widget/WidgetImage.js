import React from 'react';

import ld1 from '../../images/ld1.png'
import ld2 from '../../images/ld2.png'
import ld3 from '../../images/ld3.png'
import healthcare from '../../images/healthcare.png'
import saas from '../../images/saas.png'

import { Jumbotron } from 'react-bootstrap'


const WidgetImage = (props) => {

    const jumboStyle = {
        backgroundImage: `url(${checkTheme()})`,
        height: '40rem',
        opacity: 1,
        paddingLeft: '5rem',
        zIndex: '-2',
        backgroundPosition: 'relative',
    }

    function checkTheme() {
        if (props.theme === "healthcare") {
            return healthcare
        } else if (props.theme === "saas") {
            return saas
        } else {
            return ld2
        }
    }

    return (
        <div>
            <Jumbotron fluid style={jumboStyle}>
                    <div style={{ float: "right", paddingRight: "10rem"}}>
                        {/* <Login/> */}
                    </div>
                    <div className="w-50 p-3" style={{ float: "left", paddingRight: "10rem", color: "white"}}>
                        <h1 className="display-3"> LaunchDarkly Demo Site</h1>
                        <h1 className="display-7"> LaunchDarkly Demo stuff to show stuff with stuff and more stuff to be done</h1>
                    </div>
                </Jumbotron>
            {/* <Container >
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <Image src={checkTheme()} alt="first ld" fluid/>
                </div>
            </Container> */}
        </div>
        
    )
}

export default WidgetImage;