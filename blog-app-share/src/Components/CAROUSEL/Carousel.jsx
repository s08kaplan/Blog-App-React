import React, { useState } from 'react'
import { tryImages } from '../../TRY/try';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import "./Carousel.scss"

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const length = tryImages.length;
    const handlePrevious = () => {
      const newIndex = index - 1;
     setIndex(newIndex < 0 ? length - 1 : newIndex);
    };
    
    const handleNext = () => {
      const newIndex = index + 1;
      setIndex(newIndex >= length ? 0 : newIndex);
    };
    
    return (
      <section className='carousel-main'>
          
       <div className="carousel">

        <img src={tryImages[index]} alt="nature-image" />

        <div className="previous-icon" onClick={handlePrevious}>
          <MdNavigateBefore />
        </div>

         <div className="next-icon" onClick={handleNext}>
         <MdNavigateNext />
          </div>
      </div>  
      </section>
  
     
    );
  };
  
  export default Carousel;