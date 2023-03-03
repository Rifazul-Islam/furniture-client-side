import React from 'react';
import Cetagory from '../Cetagory/Cetagory';
import Section1 from '../Section1/Section1';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
                     <Banner></Banner>
                     <Cetagory></Cetagory>
                     <Section1></Section1>
        </div>
    );
};

export default Home;