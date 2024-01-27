import React, { useState } from 'react'
import { tryImages } from '../../TRY/try';
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
      <>
          
       <div className="carousel">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        
        <img src={tryImages[index]} alt="nature-image" width={"450px"} style={{objectFit:"fill"}} />
       
      </div>  
      </>
  
     
    );
  };
  
  export default Carousel;