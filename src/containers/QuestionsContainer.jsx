import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';

import Header from '../components/Header';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import unchecked from '../utils/unchecked';

const QuestionsContainer = () => {
  const {
    state: { content },
  } = useContext(AppContext);
  const [title, setTitle] = useState({});
  const [questions, setQuestions] = useState({});
  const [answers, setAnswers] = useState({});
  const [correctAnswer, setCorrectAnswers] = useState({});
  let [count, setCount] = useState(0);
  let currentAnswer = null;
  let currentElement = null;

  function handleAnswer(event) {
    event.preventDefault();
    if (currentAnswer !== null) {
      if (currentAnswer === correctAnswer[0]) {
        alert('Win');
      }
    } else {
      alert('Seleccione una respuesta');
      return true;
    }

    if (count === content.length - 1) {
      count = content.length - 1;
    } else {
      unchecked(currentElement, true);
      setCount((count += 1));
    }
  }

  useEffect(() => {
    const getTitle = [],
      getQuestions = [],
      getAnswers = [],
      getCorrectAnswers = [];

    content.forEach((item) => {
      const { title, question, options, correctAnswer } = item;
      getTitle.push(title);
      getQuestions.push(question);
      getAnswers.push(options);
      getCorrectAnswers.push(correctAnswer);
    });
    setTitle(getTitle);
    setQuestions(getQuestions);
    setAnswers(getAnswers);
    setCorrectAnswers(getCorrectAnswers);
  }, []);

  function checked(target) {
    const { name } = target;
    currentAnswer = name;
    unchecked(target);
  }

  function handleClick(event) {
    const { target } = event;
    currentElement = target;
    checked(target);
  }

  console.log(title);

  return (
    <>
      <Header />
      <main className='main'>
        {title.length > 0 && (
          <Questions title={title[count]} question={questions[count]} />
        )}
        <div className='answer'>
          <h3>Selecciona una respuesta</h3>
          <form>
            {answers.length > 0 && (
              <>
                <label className='options' htmlFor={answers[count][0]}>
                  <span>{answers[count][0]}</span>
                  <input
                    type='checkbox'
                    name={answers[count][0]}
                    onClick={handleClick}
                  />
                </label>

                <label className='options' htmlFor={answers[count][1]}>
                  <span>{answers[count][1]}</span>
                  <input
                    type='checkbox'
                    name={answers[count][1]}
                    onClick={handleClick}
                  />
                </label>

                <label className='options' htmlFor={answers[count][2]}>
                  <span>{answers[count][2]}</span>
                  <input
                    type='checkbox'
                    name={answers[count][2]}
                    onClick={handleClick}
                  />
                </label>
              </>
            )}
            <button className='button' type='button' onClick={handleAnswer}>
              Continue
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QuestionsContainer;
