const initialState = {
  user: {},
  theory: [
    {
      title: 'Medio ambiente',
      content:
        'El medio ambiente es el entorno vital. Está constituido por elementos físicos, biológicos, económicos, sociales, culturales y estéticos, estos elementos interactuan entre ellos mismos o con los otros. A estos elementos se les conoce como "factores ambientales"',
    },
    {
      title: 'Ecosistema',
      content: '',
    }
  ],
  content: [
    {
      title: 'Medio ambiente',
      question: '¿Qué es el medio ambiente?',
      options: [
        'Un medio de comunicación',
        'Es el entorno vital, en él interactuan sus componentes entre sí mismos o con los otros',
        'Es un entorno en el que existe vida',
      ],
      correctAnswer:
        'Es el entorno vital, en él interactuan sus componentes entre sí mismos o con los otros',
    },
  ],
  currentAnswer: {},
};

export default initialState;
