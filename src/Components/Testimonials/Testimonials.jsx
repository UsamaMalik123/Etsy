import React from 'react';
import './testimonials.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Review from '../Review/Review';
import dp1 from '../../assets/review1.jpg';
import dp2 from '../../assets/review2.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Shows 3 cards at a time on desktops and iPads
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2, // Maintain 3 cards at a time on iPads
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1, // Shows 1 card at a time on mobile devices
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false,
            }
          }
        ]
      };
    

    return (
        <div className='container app__testimonials' id='Testimonials'>
            <p>Gallery</p>
            <h1>Campus Photos</h1>

            
            <div className="project-carousel-container">
                <Slider {...settings} className="slider">
                    <Review
                        img={dp1}
                        review="The faculty's dedication to student success is evident, fostering a supportive learning environment. The diverse campus community encourages collaboration and understanding. The resources provided, from modern facilities to engaging extracurriculars, enhance the overall educational experience. Highly recommended for those seeking a fulfilling university experience"
                        name='Emily Williams'
                        location="Edusity,USA"
                    />
                    <Review
                        img={dp2}
                        review="The faculty's dedication to student success is evident, fostering a supportive learning environment. The diverse campus community encourages collaboration and understanding. The resources provided, from modern facilities to engaging extracurriculars, enhance the overall educational experience. Highly recommended for those seeking a fulfilling university experience"
                        name='Emily Williams'
                        location="Edusity,USA"
                    />
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
