import React from 'react';
import {
    Jumbotron,
    Button,
} from 'react-bootstrap';

function About() {
    // CSS for Jumbotron
    const jumboStyle = {
        'backgroundColor': '#D0D0D0',
    };

    return (
        <div className='About'>
            <Jumbotron style={jumboStyle}>
                <Button variant="primary" size="lg" block href='https://github.com/wentao-yang/codename'>GitHub Repo</Button>{' '}
            </Jumbotron>
        </div>
    );
}

export default About;