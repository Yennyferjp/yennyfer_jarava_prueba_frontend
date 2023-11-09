import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import leftArrowImage from './images/leftArrow.png';
import rightArrowImage from './images/rigthArrow.png';
import styles from './Carousel.module.css';

function CarouselPrevArrow(props) {
  const { className, onClick } = props;
  return (

    <img
      src={leftArrowImage}
      alt="Flecha izquierda"
      className={`${className} ${styles.arrowLeft}`}
      onClick={onClick}
    />

  );
}

function CarouselNextArrow(props) {
  const { className,  onClick } = props;
  return (

    <img
      src={rightArrowImage}
      alt="Flecha derecha"
      className={`${className} ${styles.arrowRight}`}
      onClick={onClick}

    />
  );
}

const Carousel = () => {
  const sliderRef = useRef(null);

  const cardData = [
    {
      img: 'URL_IMAGEN_1',
      title: 'Lorem Ipsum1',
      content: 'Lorer ipsum dalor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aeneanvitae nibh eu neque finibus luctus.',
    },
    {
      img: 'URL_IMAGEN_2',
      title: 'Lorem Ipsum2',
      content: 'Lorer ipsum dalor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aeneanvitae nibh eu neque finibus luctus.',
    },
    {
      img: 'URL_IMAGEN_3',
      title: 'Lorem Ipsum3',
      content: 'Lorer ipsum dalor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aeneanvitae nibh eu neque finibus luctus.',
    },
    {
      img: 'URL_IMAGEN_1',
      title: 'Lorem Ipsum4',
      content: 'Lorer ipsum dalor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aeneanvitae nibh eu neque finibus luctus.',
    },
    {
      img: 'URL_IMAGEN_2',
      title: 'Lorem Ipsum5',
      content: 'Lorer ipsum dalor sit amet, consectetur adipiscing elit. Quisque eu consectetur mi. Sed nunc enim, facilisis et rhoncus id, rutrum id turpis. Ut nec gravida dui, quis placerat massa. Aeneanvitae nibh eu neque finibus luctus.',
    },
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    className: "center",
    centerPadding: "200px",
    speed: 500,
    slidesToShow: 3,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />
  };

  return (
    <div className={styles.carouselContainer}>

      <Slider {...settings} ref={sliderRef}>
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}

      </Slider>

    </div>
  );
};

export default Carousel;