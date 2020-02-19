import React, {Component} from "react";
import arrow from '../images/svg/arrow.svg';
import round from '../images/svg/round.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// параметры для слайдера
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

class Slider extends Component {
    state = {
        loading: false,
        data: []
    };
    componentDidMount() {

        fetch('../db.json')
            .then(response => response.json())
            .then(data => {
                // console.log('data ', data.components[0].metadata.images[1]);
                this.setState({
                    content: data,
                    isLoad: false,
                    data: data.components[0].metadata.images
                })
            });
    }

    render () {
        return (
            <div className="slider col-md-11">
                <h1>{this.props.galleryTitle}</h1>
                <div className="slider__gallery">
                    {/*start */}

                    <Carousel
                        responsive={responsive}
                        renderButtonGroupOutside={true}
                        showDots={true}
                        swipeable
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {this.state.data.map((post, idx) => {
                            return (
                                <div  key={idx}>
                                    <img
                                        className="slider__gallery-image"
                                        src={post}
                                        alt="Alt text"
                                    />
                                </div>
                            );
                        })}
                    </Carousel>

                    {/*end*/}
                </div>
                <div className="slider__buttons">
                    {/*TODO: после настройки кастомных стрелок и точек слайдера убрать visibility: hidden*/}
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
    }

}

export default Slider;
