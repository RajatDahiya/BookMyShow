import React from 'react';
import Slider from 'react-slick';


//Components
import Poster from '../../components/Poster/Poster.component';

//Config
import settings from '../../Config/PosterCarousel.config';

const PosterSlider = (props) => {
    return (
        <>
        <div className="flex flex-col items-start">
          <h3 className={`text-xl font-bold ${props.isDark ? "text-white" : "text-gray-900"}`}>{props.title}</h3>
          <p className={`text-xs font-medium ${props.isDark ? "text-white" : "text-gray-900"}`}>{props.subtitle}</p>
        </div>
        <Slider {...settings}>
           {props.images.map((image) =>(
               <Poster{...image} isDark={props.isDark} />
           ))}
        </Slider>
            
        </>
    );
};

export default PosterSlider;
