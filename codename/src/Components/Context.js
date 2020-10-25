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
                <h1>It's October 23, 2020, and COVID-19 cases are on the rise again.</h1>
            </Jumbotron>
        </div>
    );
}

export default Context;