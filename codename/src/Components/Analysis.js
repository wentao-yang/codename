import React from 'react';
import {
    Jumbotron,
} from 'react-bootstrap';

function Analysis() {
    // CSS for Jumbotron
    const jumboStyle = {
        'backgroundColor': '#F0F0F0',
    };

    return (
        <div className='Analysis'>
            <Jumbotron style={jumboStyle}>
                <h1>Analysis of data here</h1>
            </Jumbotron>
        </div>
    );
}

export default Analysis;