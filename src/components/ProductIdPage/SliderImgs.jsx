import { useState } from 'react';
import './styles/SliderImgs.css'

const SliderImgs = ({ prod }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const objectStyle ={
        transform: `translateX(calc(-${currentIndex}/3 * 100%))`
    }

    const handlePrev = () => {
        if(currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
        } else {
        setCurrentIndex(2)
        }
    }

    const handleNext = () => {
        if(currentIndex < 2) {
            setCurrentIndex(currentIndex + 1)
        } else {
          setCurrentIndex(0)  
        }
    }

   //console.log(prod);
  return (
    <div className="slider">
        <button onClick={handlePrev} className='slider__btn slider__prev'>
            <i className='bx bx-chevron-left'></i>
        </button>
        <div className="slider__movable" style={objectStyle}>
            {
                prod?.images.map((infoImg, index )=> (
                    <div key={index} className="slider__img-container" >
                        <img className="slider__img" src={infoImg.url} alt="" />
                    </div>
                ))
            }
        </div>
        <button onClick={handleNext} className='slider__btn slider__next'>
            <i className='bx bx-chevron-right' ></i>
        </button>
    </div>
  )
}

export default SliderImgs