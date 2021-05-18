import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import image from '../assets/images/cells_desktop.jpg';

import ImageContainer from '../components/ImageContainer';

import AppContext from '../context/AppContext';

const Home = (props) => {
  console.log({ props });
  const {
    state: { theory },
  } = useContext(AppContext);

  const history = useHistory();

  console.log(theory);
  let [count, setCount] = useState(0);
  let [showButton, setShowButon] = useState(false);

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
      setShowButon(true);
    } else {
      setCount((count += 1));
    }
  }

  function goToPlay() {
    history.push('/questions');
  }

  console.log(count, theory.length);
  return (
    <>
      <div className="top-container">
        <ImageContainer cls="image-container" src={image} />
        <div className="text-container">
          <h2>{theory[count].title}</h2>
          {typeof theory[count].content !== 'object' ? (
            <p>{theory[count].content}</p>
          ) : (
            <>
              {theory[count].content.map((item) => (
                <p key={Math.random().toString()}>{item}</p>
              ))}
            </>
          )}
        </div>
      </div>
      {showButton === true && (
        <button className="button play" type="button" onClick={goToPlay}>
          Jugar
        </button>
      )}
      <div className="bottom-container">
        <div className="button-container">
          {count > 0 && (
            <button className="button" type="button" onClick={previous}>
              Anterior
            </button>
          )}
          <button className="button next" type="button" onClick={next}>
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
