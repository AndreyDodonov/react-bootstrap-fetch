import React, {Component} from 'react';
import './styles/main.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./components/Header";
import Slider from "./components/Slider";
import Text from "./components/Text";
import BackForm from "./components/BackForm";
import Footer from "./components/Footer";


class App extends Component {

    constructor() {
        super();
        this.state = {
            content: {}
        };
    }

    componentDidMount() {
        /**
         * content: весь json
         * isLoad: флаг для лоадера
         * titleLeft : о нас
         * titleRight : важно знать
         * paragraphRight : Абсолютная погрешность ...
         * paragraphLeft: Структурный голод столь ... + Закон, согласно ...
         * galleryTitle: Галерея
         * images : массив с ссылками на фото
         *
         */
        fetch('./db.json')
            .then(response => response.json())
            .then(data => {
                console.log(data.components[0].metadata.images);
                this.setState({
                    content: data,
                    isLoad: false,
                    titleLeft: data.components[1].metadata.components[0].metadata.title,
                    titleRight: data.components[1].metadata.components[1].metadata.title,
                    paragraphRight: data.components[1].metadata.components[1].metadata.text,
                    paragraphLeft: data.components[1].metadata.components[0].metadata.text,
                    galleryTitle: data.components[0].metadata.title,
                    images: data.components[0].metadata.images
                })
            })

    };

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <Slider
                        galleryTitle={this.state.galleryTitle}
                        data={this.state.images}
                    />
                    <Text
                     title_left={this.state.titleLeft}
                     title_right={this.state.titleRight}
                     paragraphRight={this.state.paragraphRight}
                     paragraphLeft={this.state.paragraphLeft}
                    >

                    </Text>
                    <BackForm/>
                </main>
                <Footer/>
            </div>
        )
    }


}

export default App;
