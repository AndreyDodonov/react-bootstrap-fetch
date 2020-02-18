import React from "react";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import arrow from '../images/svg/arrow.svg';
import round from '../images/svg/round.svg';

const Slider = () => {
    return (

            <div className="slider">
                <h1>Галерея</h1>
                <div className="slider__gallery">
                    <img className="slider__gallery-image" src={img1} alt="image1"/>
                    <img className="slider__gallery-image" src={img2} alt="image1"/>
                    <img className="slider__gallery-image" src={img3} alt="image1"/>
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
