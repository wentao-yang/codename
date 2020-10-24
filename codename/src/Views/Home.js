import React from 'react';
import {
    Jumbotron,
} from 'react-bootstrap';

function Home() {
    // CSS style sheet for certain elements
    const jumboStyle = {
        'backgroundColor': '#ffffff',
    };
    
    return (
        <div className='Home'>
            <Jumbotron style={jumboStyle}>
                <h1>Hello World</h1>
            </Jumbotron>
        </div>
    )
}

export default Home;