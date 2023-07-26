// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import camp1 from '../../assets/bannerImages/summerCampSliderCover.jpg';
import camp2 from '../../assets/bannerImages/camp2.jpg';
import camp3 from '../../assets/bannerImages/camp3.jpg';

const HomePageSlider = () => {
    return (
        <Carousel className='text-center'>
            <div className='lg:h-[calc(100vh-15vh)]'>
                <img src={camp1} />
                <p className="legend">Welcome to Shutter Safari</p>
            </div>
            <div className='lg:h-[calc(100vh-15vh)]'>
                <img src={camp2} />
                <p className="legend">Achive your goal of being a photographer during your summer. Make the summer fun and enjoy learning photography according to your taste</p>
            </div>
            <div className='lg:h-[calc(100vh-15vh)]'>
                <img src={camp3} />
                <p className="legend">You can learn what you prefer. So, what do you want to be? A wild life photographer or you just like Potraits or landscapes? Excited?</p>
            </div>
        </Carousel>
    );
};

export default HomePageSlider;