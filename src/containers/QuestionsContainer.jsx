import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';

import Questions from '../components/Questions';
import unchecked from '../utils/unchecked';
import AnswerLabel from '../components/AnswerLabel';

const QuestionsContainer = () => {
  const {
    state: { questionsContent },
  } = useContext(AppContext);

  const [showModal, setShowModal] = useState({
    response: '',
    show: false,
  });
  const [arrOfContent, setArrOfContent] = useState([]);
  let [count, setCount] = useState(0);

  let currentAnswer = null;
  let currentElement = null;

  function handleAnswer(event) {
    event.preventDefault();
    if (currentAnswer !== null) {
      if (currentAnswer === questionsContent[count].correctAnswer) {
        console.log('correcto');
        setShowModal({ response: 'Respuesta correcta', show: true });
      } else {
        setShowModal({response: 'Respuesta incorrecta', show: true});
      }
    } else {
      setShowModal({response: 'Seleccione una respuesta', show: true});
      return true;
    }
    if (count === questionsContent.length - 1) {
      count = questionsContent.length - 1;
    } else {
      unchecked(currentElement, true);
    }
  }

  const nextQuestions = () => {
    setShowModal({response: '', show: false});
    setCount((count += 1));
  };

  useEffect(() => {
    const contentArray = questionsContent.map((item) => item);
    setArrOfContent(contentArray);
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

  return (
    <>
      {showModal.show && (
        <div className="modal">
          <div className="container">
            <div className="circle" onClick={nextQuestions}>
              <div className="rec"></div>
              <div className="rec"></div>
            </div>
            <div>
              <h2>{showModal.response}</h2>
            </div>
          </div>
        </div>
      )}
      {arrOfContent.length > 0 && (
        <>
          <div className="top-container">
            <Questions
              title={arrOfContent[count].title}
              question={arrOfContent[count].question}
            />
          </div>
          <div className="bottom-container">
            <div className="answer">
              <div className="text-container">
                <h3>Selecciona una respuesta</h3>
              </div>
              <form>
                {arrOfContent[count].options.length > 0 && (
                  <>
                    {arrOfContent[count].options.map((answer) => (
                      <AnswerLabel
                        key={Math.random().toString()}
                        answer={answer}
                        func={handleClick}
                      />
                    ))}
                  </>
                )}
                <button className="button" type="button" onClick={handleAnswer}>
                  Continue
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default QuestionsContainer;
