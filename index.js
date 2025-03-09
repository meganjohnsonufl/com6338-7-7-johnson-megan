const questionsArr = [
    {
      question: 'Who created JavaScript?',
      answer: 'Brendan Eich',
      options: [
        'Will Ferrell',
        'Brendan Eich',
        'Dan Abramov',
        'Pedro Pascal',
      ]
    },
    {
      question: 'What year was JavaScript created?',
      answer: '1995',
      options: [
        '1988',
        '2020',
        '1995',
        '2005',
      ]
    },
    {
      question: 'Which company developed JavaScript?',
      answer: 'Netscape',
      options: [
        'Microsoft',
        'Netscape',
        'Google',
        'Tesla',
      ]
    },
    {
      question: 'What is JavaScript primarily used for?',
      answer: 'Web development',
      options: [
        'Data analysis',
        'Vehicle design',
        'Web development',
        'Game development',
      ]
    },
    {
      question: 'What does "DOM" stand for?',
      answer: 'Document Object Model',
      options: [
        'Dog On Mad',
        'Document Object Model',
        'Dynamic Orange Macaron',
        'Do Overload Mice',
      ]
    },
  ];

window.onload = () => {
    const startButton = document.getElementById('start-quiz');
    const quizContainer = document.getElementById('quiz');
    
    startButton.addEventListener('click', startQuiz);
  
    function startQuiz() {
      displayQuestion(0);
    }
  
    function displayQuestion(index) {
      const question = questionsArr[index];
      const questionText = question.question;
      const options = question.options;
  
      quizContainer.innerHTML = `
        <p>${questionText}</p>
        <div>
          ${options.map(option => `<button>${option}</button>`).join('')}
        </div>
        <p>30</p>
      `;
      
      startTimer();
    }
  
    function startTimer() {
      let timeLeft = 30;
      const timerDisplay = quizContainer.querySelector('p:last-child');
  
      const timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
  
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
        }
      }, 1000);
    }
  };