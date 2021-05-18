const initialState = {
  user: {},
  theory: [
    {
      title: 'Las Células',
      content: `
      Todos los seres vivos estamos formados por células.
      Nuestro cerebro está hecho de células, al igual que la piel,
      los músculos y nuestros órganos, por lo que el origen de la vida
      y el de las células van de la mano.`,
    },
    {
      title: 'Teoría celular',
      content: [
        'Todos los organismos están compuestos por una o más células.',
        'La célula es la unidad estructural de la vida.',
        'Las células pueden surgir únicamente por la división de otra célula.',
      ],
    },
    {
      title: 'Propiedades básicas de las células',
      content: [
        'La propiedad básica de las células es la vida, siendo la unidad más pequeña con esta propiedad.',
        'La muerte es una propiedad básica, si una célula es dañada, es probable que muera.',
      ],
    },
  ],
  questionsContent: [
    {
      title: 'La célula',
      question: 'Es la unidad básica de la vida',
      options: [
        'La célula',
        'Organos',
        'No se requiere nada para crear vida',
      ],
      correctAnswer:
        'La célula',
    },
    {
      title: '1',
      question: '2',
      options: [
        '3',
        '4',
        '5',
      ],
      correctAnswer:
        '5',
    },
  ],
  currentAnswer: {},
};

export default initialState;
