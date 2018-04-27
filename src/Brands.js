import React, { Component } from 'react';

import BebeStore from './images/brands/BebeStore.jpg';
import BmwJazzFestival from './images/brands/BmwJazzFestival.jpg';
import BruninhoEDavi from './images/brands/BruninhoEDavi.jpg';
import CanalDaPeca from './images/brands/CanalDaPeca.jpg';
import Convenia from './images/brands/convenia.jpg';
import Digix from './images/brands/Digix.jpg';
import JadseJadson from './images/brands/JadseJadson.jpg';
import MagazineLuiza from './images/brands/MagazineLuiza.jpg';
import MichelTelo from './images/brands/MichelTelo.jpg';
import Sanesul from './images/brands/sanesul.jpg';

import './Brands.scss';

class Brands extends Component {
    render() {

        return (
            <div className="brands">
                <img src={BebeStore} alt="" width="110" />
                <img src={BmwJazzFestival} alt="" width="110" />
                <img src={BruninhoEDavi} alt="" width="110" />
                <img src={CanalDaPeca} alt="" width="110" />
                <img src={Convenia} alt="" width="110" />
                <img src={Digix} alt="" width="110" />
                <img src={JadseJadson} alt="" width="110" />
                <img src={MagazineLuiza} alt="" width="110" />
                <img src={MichelTelo} alt="" width="110" />
                <img src={Sanesul} alt="" width="110" />
            </div>
        )

    }
}

export default Brands;
