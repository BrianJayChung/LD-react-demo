import React from 'react';
import WidgetImage from '../widget/WidgetImage'
import { Container, Image } from 'react-bootstrap'
import saas from '../../images/saas.png'

const Saas = (props) => {

    return (
            <div>
                <Image src={saas} style={{ width: "120rem", height: "auto", display: "block", margin: "auto"}} fluid />
            </div>

    )

}

export default Saas;