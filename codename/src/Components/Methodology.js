import React from 'react';
import {
    Jumbotron,
} from 'react-bootstrap';

function Methodology() {
    // CSS style sheet for certain elements
    const jumboStyle = {
        'backgroundColor': '#F0F0F0',
    };

    return (
        <div className='Methodology'>
            <Jumbotron style={jumboStyle}>
                <h1>Methodology of ML here</h1>
            </Jumbotron>
        </div>
    );
}

export default Methodology;