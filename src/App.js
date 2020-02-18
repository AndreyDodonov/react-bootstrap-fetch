import React, {Component} from 'react';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./components/Header";
import Slider from "./components/Slider";
import Text from "./components/Text";
import BackForm from "./components/BackForm";
import Footer from "./components/Footer";


class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch('./db.json')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div>

                <Header/>
                <main>
                    <Slider/>
                    <Text/>
                    <BackForm/>
                </main>
                <Footer/>
            </div>
        )
}




}

export default App;
