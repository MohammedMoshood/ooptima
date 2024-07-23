import React, { useEffect, useMemo, useState } from "react";
import "../styles/Modal.css";
import { FaTimesCircle } from "react-icons/fa";
const Modal = ({ user, setModal }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState();
  const [final, setFinal] = useState(false);
  var Studentq = useMemo(
    () => [
      {
        text: "On a scale of 1 to 10, How Effective do you find the instructor teaching methods?",
        list: [
          "pedagogy",
          "Communication style",
          "Availabilty for questions",
          "feedback effectiveness",
          "classroom interaction",
          "technical skills",
        ],
      },
      {
        text: "From 1 to 10, How would you rate your overall experience with the platform",
        list: [
          "student platform",
          "course content",
          "practive projects",
          "instructor style",
          "customer service",
          "school and staff",
        ],
      },
    ],
    []
  );
  var Instructorq = useMemo(
    () => [
      {
        text: "Rate the course content on a scale of 1-10",
        list: [
          "Interactivity",
          "Engagement",
          "Resources",
          "Structure",
          "Relevance",
          "Examples",
        ],
      },
      {
        text: "From 1 to 10, How would you rate your overall experience with the platform",
        list: [
          "student platform",
          "course content",
          "practive projects",
          "instructor style",
          "customer service",
          "school and staff",
        ],
      },
    ],
    []
  );

  const [questions, setQuestions] = useState([
    {
      text: "From 1 to 10, How would you rate your overall experience with the platform",
      list: [
        "student platform",
        "course content",
        "practive projects",
        "instructor style",
        "customer service",
        "school and staff",
      ],
    },
  ]);

  useEffect(() => {
    if (user.role === "instructor") {
      setQuestions(Instructorq);
    } else {
      setQuestions(Studentq);
    }
  }, [user.role, Instructorq, Studentq]);
  const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [myStyle, setMyStyle] = useState({});
  const handleClick = (id) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [id]: !prevState[id],
    }));
  };
  const handleSubmit = () => {
    if (selected && current + 1 !== questions.length) {
      setCurrent(current + 1);
      setMyStyle({});
      setSelected(null);
    } else if (selected) {
      setFinal(true);
    }
  };

  if (final) {
    return (
      <div className="overlay">
        <FaTimesCircle onClick={() => setModal(false)} className="close" />
        <div className="modal-container">
          <span style={{ color: "grey" }}>
            Thank you for sharing your experience
          </span>
          <button onClick={() => setModal(false)} className="modal-submit">
            Resume Course
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="overlay">
      <FaTimesCircle onClick={() => setModal(false)} className="close" />
      <div className="modal-container">
        <span style={{ color: "grey" }}>Question {current + 1}</span>
        <span className="review-question">{questions[current].text}</span>
        <div className="review-options">
          {answer.map((elm, i) => {
            return (
              <div
                key={i}
                style={{
                  color: selected === i && "black",
                  backgroundColor: selected === i && "white",
                  border: selected === i && "none",
                }}
                onClick={() => setSelected(i)}
                className="single-option"
              >
                {elm}
              </div>
            );
          })}
        </div>
        <span style={{ color: "grey" }}>What did you appreciate Most?</span>
        <div className="list">
          {questions[current].list?.map((elm, i) => {
            return (
              <div
                key={i}
                style={{
                  backgroundColor: myStyle[`${i}`] && "white",
                  color: myStyle[`${i}`] && "black",
                  fontWeight: myStyle[`${i}`] && "1000",
                  scale: myStyle[`${i}`] && "0.9",
                  border: myStyle[`${i}`] && "3px solid grey",
                }}
                onClick={() => handleClick(i)}
                className="list-item"
              >
                {elm}
              </div>
            );
          })}
        </div>
        <textarea
          className="feedback"
          placeholder="Type in your feedback here"
        />
        <button onClick={handleSubmit} className="modal-submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
