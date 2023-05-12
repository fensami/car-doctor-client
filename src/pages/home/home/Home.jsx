import React from 'react';
import Banner from '../banner/Banner';
import About from '../about/About';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import PropularProducts from '../popularProducts/PropularProducts';
import Team from '../team/Team';
import CoreFeatures from '../coreFeatures/CoreFeatures';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <PropularProducts></PropularProducts>
            <Team></Team>
            <CoreFeatures></CoreFeatures>
        </div>
    );
};

export default Home;