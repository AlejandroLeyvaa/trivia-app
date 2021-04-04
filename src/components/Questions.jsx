import React from 'react';
import ImageContainer from './ImageContainer';

const Questions = ({ title, question }) => {
  return (
    <>
      <div className='question'>
        <ImageContainer cls='image-container' />
        <div className='text-container'>
          <h2>{title}</h2>
          <p>{question}</p>
        </div>
      </div>
    </>
  );
};

export default Questions;
