import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import WidgetImage from '../widget/WidgetImage'
import { Image, Container } from 'react-bootstrap';
import healthcare from '../../images/healthcare.png'

import { withLDConsumer } from 'launchdarkly-react-client-sdk';




const Healthcare = ({ flags }) => {

    // const {value, setValue} = useContext(ThemeContext)

    var bannerDisplay = 'none'

    if(flags.chatbox){
        bannerDisplay = 'block'
    }

    const bannerStyle = {
        backgroundColor: '#FEC941',
        textAlign: 'left',
        padding: '30px',
        display: bannerDisplay
    }

    // const { showWidgets } = useFlags();
    // const ldClient = useLDClient();

    // const onLoginSuccessful = () => ldClient.identify({ key: 'aa0ceb' });
    // console.log(showWidgets)
    // console.log(onLoginSuccessful)

    console.log(flags.chatbox)

        return (
            <div>
                <div style={bannerStyle}>
                    <div style={{paddingBottom: '50'}}>
                        <Image src="https://healthy.kaiserpermanente.org/content/dam/kporg/jkp/icons/alert-icon.png" />
                        <h5 style={{ display: 'inline-block', marginRight: '10px' }}> CORONAVIRUS/COVID-19: Learn how to protect yourself and get care </h5>
                        <Image style={{ display: 'inline-block', height: '16px', marginBottom: '5px'}} src="https://healthy.kaiserpermanente.org/content/dam/kporg/jkp/icons/caret-right.png"/>
                    </div>
                </div>
                <Image src={healthcare} style={{ width: "auto", height: "auto", display: "block", margin: "auto"}} fluid />
            </div>

        )
}

export default withLDConsumer()(Healthcare);
