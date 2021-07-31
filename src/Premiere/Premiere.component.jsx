import React from 'react';
import Slider from 'react-slick';

//Componenets
import Poster from '../components/Poster/Poster.component';

export const Premiere = () => {
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
          {
            breakpoints: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoints: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              InitialSlide: 2,
            },
          },
          {
            breakpoints: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
    const PremiereImage = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
          {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english",
          },
    ];
 return <>
 <div className="flex flex-col items-start">
   <h3 className="text-white text-2xl font-bold">Premieres</h3>
   <p className="text-white text-xs font-medium">Brand new releases every Friday</p>
 </div>
 <Slider {...settings}>
    {PremiereImage.map((image) =>(
        <Poster{...image} isDark />
    ))}
 </Slider>
 </>

};
