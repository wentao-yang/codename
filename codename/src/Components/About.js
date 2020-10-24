import React from 'react';
import {
    Jumbotron,
} from 'react-bootstrap';

function About() {
    // CSS style sheet for certain elements
    const jumboStyle = {
        'backgroundColor': '#ffffff',
    };

    return (
        <div className='About'>
            <Jumbotron style={jumboStyle}>
                <h1>About section</h1>
            </Jumbotron>
        </div>
    );
}

export default About;