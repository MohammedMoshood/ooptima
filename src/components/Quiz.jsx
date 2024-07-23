import React, { useState } from "react";
import "../styles/Quiz.css";
const Quiz = ({ user }) => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is a common method used in phishing attacks?",
      options: [
        { id: 0, text: "Stealing physical documents", isCorrect: false },
        { id: 1, text: "Sending fraudulent emails", isCorrect: true },
        { id: 2, text: "Eavesdropping on conversations", isCorrect: false },
        { id: 3, text: "Using malware on USB sticks", isCorrect: false },
      ],
    },
    {
      text: "What does the acronym 'DDoS' stand for?",
      options: [
        { id: 0, text: "Dedicated Denial of Service", isCorrect: false },
        { id: 1, text: "Distributed Denial of Service", isCorrect: true },
        { id: 2, text: "Direct Denial of Service", isCorrect: false },
        { id: 3, text: "Distributed Data Service", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a strong password?",
      options: [
        { id: 0, text: "password123", isCorrect: false },
        { id: 1, text: "123456", isCorrect: false },
        { id: 2, text: "Qwerty", isCorrect: false },
        { id: 3, text: "P@ssw0rd!", isCorrect: true },
      ],
    },
    {
      text: "What is the purpose of a firewall in a computer network?",
      options: [
        { id: 0, text: "To speed up the network", isCorrect: false },
        {
          id: 1,
          text: "To monitor and control incoming and outgoing network traffic",
          isCorrect: true,
        },
        { id: 2, text: "To store data", isCorrect: false },
        { id: 3, text: "To connect to the internet", isCorrect: false },
      ],
    },
    {
      text: "What is ransomware?",
      options: [
        { id: 0, text: "A type of virus that steals data", isCorrect: false },
        {
          id: 1,
          text: "Malware that locks or encrypts data until a ransom is paid",
          isCorrect: true,
        },
        { id: 2, text: "A method of social engineering", isCorrect: false },
        { id: 3, text: "A security protocol", isCorrect: false },
      ],
    },
    {
      text: "Which of the following best describes 'social engineering'?",
      options: [
        { id: 0, text: "Using software to crack passwords", isCorrect: false },
        {
          id: 1,
          text: "Manipulating people to divulge confidential information",
          isCorrect: true,
        },
        { id: 2, text: "Building social media profiles", isCorrect: false },
        { id: 3, text: "Designing secure networks", isCorrect: false },
      ],
    },
    {
      text: "What is multi-factor authentication (MFA)?",
      options: [
        {
          id: 0,
          text: "A single security measure to protect data",
          isCorrect: false,
        },
        { id: 1, text: "Using multiple security questions", isCorrect: false },
        {
          id: 2,
          text: "A method that requires two or more verification factors",
          isCorrect: true,
        },
        { id: 3, text: "A type of firewall", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const handlePrev = () => {
    if (currentQuestion + 1 !== 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="quiz">
      {/* 1. Header  */}
      <h1>CyberSecurity</h1>

      {/* 3. Show results or show the question game  */}
      {showResults && user.role === "student" ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {Math.round((score / questions.length) * 100)}%)
          </h2>
          <button className="restart" onClick={() => restartGame()}>
            Restart Quiz
          </button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  className="options"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.id + 1 + ")"} {option.text}
                </li>
              );
            })}
          </ul>
          <div className="changer">
            <div onClick={() => handlePrev()} className="change">
              &#8668;
            </div>
            <div onClick={() => handleNext()} className="change">
              &#8669;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
