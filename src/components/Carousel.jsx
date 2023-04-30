import ImageSlider from "../scripts/Slider.jsx";

import Slide1 from '../assets/Slider1.jpg'
import Slide2 from '../assets/Slider2.jpg'
import Slide3 from '../assets/Slider3.jpg'
import Slide4 from '../assets/Slider4.jpg'

const Carousel = () => {
  const slides = [
    {url: Slide1, title: "Slide 1"},
    {url: Slide2, title: "Slide 2"},
    {url: Slide3, title: "Slide 3"},
    {url: Slide4, title: "Slide 4"}
  ];
  const containerStylesCaruosel = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  };
  return (
    <div>
      <div style={containerStylesCaruosel}>
      <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default Carousel;