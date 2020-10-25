import React from 'react';
import {
    Jumbotron,
} from 'react-bootstrap';

function Context() {
    // CSS for Jumbotron
    const jumboStyle = {
        'backgroundColor': '#F0F0F0',
    };

    return (
        <div className='Context'>
            <Jumbotron style={jumboStyle}>
                <h1>Background Context Here</h1>
            </Jumbotron>
        </div>
    );
}

export default Context;