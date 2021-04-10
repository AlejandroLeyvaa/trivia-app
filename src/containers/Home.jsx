import React, { useState, useContext } from 'react';
import image from '../assets/images/Image001.jpg';

import ImageContainer from '../components/ImageContainer';

import AppContext from '../context/AppContext';

const Home = () => {
  const {
    state: { theory },
  } = useContext(AppContext);
  let [count, setCount] = useState(0);

  function previous() {
    if (count === 0) {
      count = 0;
    } else {
      setCount((count -= 1));
    }
  }

  function next() {
    if (count === theory.length - 1) {
      count = theory.length - 1;
    } else {
      setCount((count += 1));
      console.log(count);
    }
  }

  return (
    <>
      <div className='top-container'>
        <ImageContainer cls='image-container' src={image} />
        <div className='text-container'>
          <h2>{theory[count].a}</h2>
          <p>{theory[count].b}</p>
        </div>
      </div>
      <div className='bottom-container'>
        <div className='button-container'>
          <button className='button' type='button' onClick={previous}>
            Previous
          </button>
          <button className='button' type='button' onClick={next}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
