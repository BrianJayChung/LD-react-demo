import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import {Button, Form, FormGroup, Label, InputGroup, Container } from 'react-bootstrap';

const textStyle = {
    color: 'black'
}

class Login extends Component {

    onSubmi = () => {
        console.log("clicking");
        this.props.history.push('/healthcare')
    }

    render() {
        return (
            <div>
                <Container style={{ width: '20rem', paddingTop: '2rem', padding: '2rem', borderStyle: 'solid', borderRadius: '0.5rem', borderWidth: '0.05rem', 'borderColor': 'lightGrey', backgroundColor: 'white'}}>
                    <Form style={textStyle}>
                        <Form.Group controlId='formBasicEmail'>
                            <h4>Support Service Login</h4>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                            <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>
                        <Form.Group controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' label='Remember me' />
                        </Form.Group>
                        <Button onClick={this.onSubmi} variant='primary' type='submit' block>
                            Sign in
                        </Button>
                        <div className='text-center'style={{paddingTop: '1rem'}}>
                            <a href='/sign-up'> Sign Up</a>
                            <span className='p2'> | </span>
                            <a href='/sign-up'> Forgot password?</a>
                        </div>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default withRouter(Login);