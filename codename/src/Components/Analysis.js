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
                    <h1>FIRST SLIDE STATISTIC</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
						className="d-block w-100"
						src="carousel.png"
						alt="Second slide"
					/>
                    <Carousel.Caption>
                    <h1>SECOND SLIDE STATISTIC</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
						className="d-block w-100"
						src="carousel.png"
						alt="Third slide"
					/>
                    <Carousel.Caption>
                    <h1>THIRD SLIDE STATISTIC</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Analysis;