import React, { Component } from 'react';

import BebeStore from './images/brands/BebeStore.jpg';
import BmwJazzFestival from './images/brands/BmwJazzFestival.jpg';
import BruninhoEDavi from './images/brands/BruninhoEDavi.jpg';
import CanalDaPeca from './images/brands/CanalDaPeca.jpg';
import Digix from './images/brands/Digix.jpg';
import JadseJadson from './images/brands/JadseJadson.jpg';
import MagazineLuiza from './images/brands/MagazineLuiza.jpg';
import MichelTelo from './images/brands/MichelTelo.jpg';

import './Brands.scss';

class Brands extends Component {
    render() {

        return (
            <section className="brands">
                <img src={BebeStore} alt="" width="150" />
                <img src={BmwJazzFestival} alt="" width="150" />
                <img src={BruninhoEDavi} alt="" width="150" />
                <img src={CanalDaPeca} alt="" width="150" />
                <img src={Digix} alt="" width="150" />
                <img src={JadseJadson} alt="" width="150" />
                <img src={MagazineLuiza} alt="" width="150" />
                <img src={MichelTelo} alt="" width="150" />
            </section>
        )

    }
}

export default Brands;
