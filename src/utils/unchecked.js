function unchecked(target, nextQuestion) {
  console.log(target);
  const { name } = target;
  const elements = target.parentElement.parentElement.getElementsByTagName(
    'input',
  );
  const arrElements = [...elements];
  arrElements.map((el) => {
    const input = el;
    if (input.name === name) {
      input.checked = true;
    } else {
      input.checked = false;
    }

    if (nextQuestion) {
      input.checked = false;
    }
    return null;
  });
}

export default unchecked;
