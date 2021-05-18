import React from 'react';
import ImageContainer from './ImageContainer';
import image from '../assets/images/cells_desktop.jpg';

const Questions = ({ title, question }) => {
  return (
    <>
      <div className='question'>
        <ImageContainer cls='image-container' src={image}/>
        <div className='text-container'>
          <h2>{title}</h2>
          <p>{question}</p>
        </div>
      </div>
    </>
  );
};

export default Questions;
