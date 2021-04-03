import React, { useState } from 'react';
import ImageContainer from './ImageContainer';

const Main = () => {

  const [answers, setAnswers] = useState({});
  const [elementName, setElementName] = useState({});

  function unchecked(target, name) {
    const elements = target.parentElement.parentElement.getElementsByTagName('input');
    const arrElements = [...elements];
    arrElements.map((el) => {
      const input = el;
      if (input.name === name) {
        input.checked = true;
      } else {
        input.checked = false;
      }
      return null;
    });
  };

  function handleAnswer(event) {
    event.preventDefault();
    if (answers[elementName] === answers['third']) {
      alert('You win');
    } else {
      alert('You lose');
    }
  }

  function checked(target) {
    const { name, checked } = target;
    const answers = {
      first: false,
      second: false,
      third: false,
    };
    answers[name] = checked;
    setAnswers(answers);
    setElementName(name);
    unchecked(target, name);
  };

  function handleClick(event) {
    const { target } = event;
    checked(target);
    target.removeEventListener('click', handleClick);
  };

  return (
    <main className='main'>
      <ImageContainer cls='image-container' />
      <div className='question'>
        <h2>Environment</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          ullam laborum animi inventore repudiandae! Ratione eum quo
          voluptatibus porro praesentium mollitia fugiat? Corporis iure
          cupiditate esse officia? Magni, sit perspiciatis.
        </p>
      </div>
      <div className='answer'>
        <h3>Selecciona una respuesta</h3>
        <form action=''>

          <label className='options' htmlFor='first'>
            <span>First</span>
            <input type='checkbox' name='first' onClick={handleClick} />
          </label>

          <label className='options' htmlFor='second'>
            <span>Second</span>
            <input type='checkbox' name='second' onClick={handleClick} />
          </label>

          <label className='options' htmlFor='third'>
            <span>Third</span>
            <input type='checkbox' name='third' onClick={handleClick} />
          </label>

          <h2>
            First
            {answers.first}
          </h2>
          <h2>
            Second
            {answers.second}
          </h2>
          <h2>
            Third
            {answers.third}
          </h2>

          <button type='button' onClick={handleAnswer}>Continue</button>

        </form>
      </div>
    </main>
  );
};

export default Main;
