import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Dropdown, DropdownButton, ButtonGroup, Button } from 'react-bootstrap';
import { ThemeContext } from '../ThemeContext'


const Settings = () => {

    const [state, setState] = useState({
        environmentValue: 'Select Environment',
        themeValue: 'Select Theme'
    })
    
    const {value, setValue} = useContext(ThemeContext)
    const history = useHistory();

    function onSubmitEnvironment(eventKey) {
        setState({
            ...state, 
            environmentValue: eventKey 
        });
    }

    function onSubmitTheme(eventKey) {
        setState({
            ...state, 
            themeValue: eventKey
        });

    }

    function onButtonClick() {
        let path = `/`;
        setValue(state.themeValue)
        history.push(path)
    }

        return (
            <div>
                <div style={{paddingBottom: "20px"}}>
                    <DropdownButton variant="success" as={ButtonGroup} style={{paddingLeft: "20px"}} onSelect={onSubmitEnvironment} id="dropdown-item-button" title={state.environmentValue} value={value}>
                        <Dropdown.Item eventKey="production" as="button">production</Dropdown.Item>
                        <Dropdown.Item eventKey="staging" as="button">staging</Dropdown.Item>
                        <Dropdown.Item eventKey="pre-prod" as="button">pre-prod</Dropdown.Item>
                        <Dropdown.Item eventKey="dev" as="button">dev</Dropdown.Item>
                        <Dropdown.Item eventKey="QA" as="button">QA</Dropdown.Item>

                    </DropdownButton>
                    <DropdownButton variant="success" as={ButtonGroup} style={{paddingLeft: "20px"}} onSelect={onSubmitTheme} id="dropdown-item-button" title={state.themeValue} value={value}>
                        <Dropdown.Item eventKey="Saas" as="button">Saas</Dropdown.Item>
                        <Dropdown.Item eventKey="Healthcare" as="button">Healthcare</Dropdown.Item>
                        <Dropdown.Item eventKey="B2B" as="button">B2B</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div style={{paddingLeft: "20px"}}>
                    <Button onClick={() => onButtonClick()} variant="primary"> Submit </Button>
                </div>
            </div>
        )
}

export default Settings;