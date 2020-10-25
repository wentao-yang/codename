import React from 'react';
import {
    Jumbotron,
} from 'react-bootstrap';

function About() {
    
    const jumboStyle = {
        'backgroundColor': '#F0F0F0',
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