import React, {useState} from "react";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import arrow from '../images/svg/arrow.svg';
import round from '../images/svg/round.svg';
import {Carousel} from "react-bootstrap";

const Slider = props => {

    function ControlledCarousel() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <img
                        className="d-block w-30"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-30"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-30"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }


    return (

            <div className="slider">
                <h1>{props.galleryTitle}</h1>
                <div className="slider__gallery">
                    <ControlledCarousel />
                </div>
                <div className="slider__buttons">
                    <img src={arrow} alt="arrow left"/>
                    <div className="slider__buttons__rounds">
                        <img src={round} alt="round"/>
                        <img src={round} alt="round"/>
                        <img src={round} alt="round"/>
                    </div>
                    <img className="slider__buttons__arrow-right" src={arrow} alt="arrow right"/>
                </div>
            </div>

    )
};

export default Slider;
