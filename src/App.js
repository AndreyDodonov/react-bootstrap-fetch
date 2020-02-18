import React from 'react';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./components/Header";
import Slider from "./components/Slider";
import Text from "./components/Text";
import BackForm from "./components/BackForm";
import Footer from "./components/Footer";



function App() {

    const getData = () => {
        return fetch('./page.json')
            .then((response) => {
                if (response.ok) {
                    return console.log(response.json())
                } else {
                    throw new Error('Данные не были получены, ошибка: ' + response.status);
                }
            })
            .then((data) => {
                return data;
            })
            .catch((err) => {
                console.warn(err);
                // можно вывести сообщение об ошибке ...
            });
    };
    getData();

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
  );
}

export default App;
