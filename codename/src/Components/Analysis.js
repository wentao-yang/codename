import React from 'react';
import {
    Carousel,
} from 'react-bootstrap';

function Analysis() {
    return (
        <div className='Analysis'>
            <Carousel>
                <Carousel.Item>
                    <img
						className="d-block w-100"
						src="carousel.png"
						alt="First slide"
					/>
                    <Carousel.Caption>
                    <h2>The map is mainly blank because most places are similar in terms of the rate of change or corona virus. The counties that are displayed are the main hot spots where change is rampantly increasing.</h2>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
						className="d-block w-100"
						src="carousel.png"
						alt="Second slide"
					/>
                    <Carousel.Caption>
                    <h2>The Mid-West/Central region of the US seems to be most likely to increase in corona virus cases over the next month.</h2>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
						className="d-block w-100"
						src="carousel.png"
						alt="Third slide"
					/>
                    <Carousel.Caption>
                    <h2>Existing hotspots in the nation are not predicted to go down in number of cases since they all depict a positive rate of change.</h2>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Analysis;