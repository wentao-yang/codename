import React from 'react';
import {
    Jumbotron,
} from 'react-bootstrap';

function Methodology() {
    // CSS for Jumbotron
    const jumboStyle = {
        'backgroundColor': '#F0F0F0',
    };

    return (
        <div className='Methodology'>
            <Jumbotron style={jumboStyle}>
                <h1>Methodology</h1>
                <p>The predictive model uses rates of change with respect to cases on a day to day basis, per county. Because we do not know the function at which the number of cases increase per day due to many extraneous factors, we decided to get an average of the rates of changes between September 22nd to October 22nd. This average rate for each county was applied for the following month, up until November 22nd. The data was then divided by the county's respective population and then subsequently normalized Although this does not accurately predict exactly how COVID19 cases will increase (or decrease) due to factors unaccounted for, it does provide a snapshot image of what could occur in the next month if nothing were to change in public handling of COVID-19 which is valuable.</p>
            </Jumbotron>
        </div>
    );
}

export default Methodology;