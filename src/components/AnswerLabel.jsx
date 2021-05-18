import React from 'react';

const AnswerLabel = ({ answer, func}) => {
  return (
    <label className="options" htmlFor={answer}>
      <span>{answer}</span>
      <input type="checkbox" name={answer} onClick={func} />
    </label>
  );
};

export default AnswerLabel;
