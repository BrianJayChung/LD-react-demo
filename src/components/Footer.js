import React from 'react';
import './Footer.css'

const Footer = (props) => {

    return (
        <div>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Company name</h4>
                            <ul className="list-unstyled">
                                <li>12341321</li>
                                <li>california, CA</li>
                                <li> 131 sesmse street.</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Company name</h4>
                            <ul className="list-unstyled">
                                <li>12341321</li>
                                <li>california, CA</li>
                                <li> 131 sesmse street.</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Company name</h4>
                            <ul className="list-unstyled">
                                <li>12341321</li>
                                <li>california, CA</li>
                                <li> 131 sesmse street.</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Support Service | All rights reserved | Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

    