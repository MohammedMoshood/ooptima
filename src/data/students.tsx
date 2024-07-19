
  interface Question {
    questionId: string;
    text: string;
    options: string[];
    correctOptionIndex: number;
  }
  
  interface Answer {
    questionId: string;
    selectedOptionIndex: number;
  }
  
  interface Attempt {
    studentId: string;
    answers: Answer[];
    score: number;
    timestamp: string;
  }
  
  interface Quiz {
    quizId: string;
    title: string;
    questions: Question[];
    attempts: Attempt[];
  }
  
  interface Submission {
    studentId: string;
    submissionLink: string;
    grade: number;
    feedback: string;
    gradedBy: string;
    timestamp: string;
  }
  
  interface Project {
    projectId: string;
    title: string;
    submissions: Submission[];
  }
  
  interface Feedback {
    userId: string;
    rating: number;
    comment: string;
    timestamp: string;
  }
  
  interface CourseFeedback {
    courseId: string;
    feedbacks: Feedback[];
  }
  
  interface Participant {
    userId: string;
    role: 'student' | 'instructor';
    attended: boolean;
    timestamp: string;
  }
  
  interface ClassSession {
    sessionId: string;
    date: string;
    participants: Participant[];
  }
  
  interface QuestionAndAnswer {
    question: string;
    answer: string;
  }
  
  interface IndividualEvaluation {
    evaluationId: string;
    instructorId: string;
    studentId: string;
    dateScheduled: string;
    questionsAndAnswers: QuestionAndAnswer[];
    overallFeedback: string;
    timestamp: string;
  }
  
  interface Student {
    studentId: string;
    name: string;
    quizzes: Quiz[];
    projects: Project[];
    instructorFeedback: Feedback[];
    courseFeedback: CourseFeedback[];
    technologyFeedback: Feedback[];
    classSessions: ClassSession[];
    individualEvaluations: IndividualEvaluation[];
  }
 const studentData: Student = {
    studentId: "student1",
    name: "Olanrewaju Tunmise",
    quizzes: [
      {
        quizId: "quiz1",
        title: "Introduction to JavaScript",
        questions: [
          {
            questionId: "q1",
            text: "What is JavaScript?",
            options: ["Programming Language", "Scripting Language", "CoffeeScript", "TypeScript"],
            correctOptionIndex: 1,
          },
          // More questions...
        ],
        attempts: [
          {
            studentId: "student1",
            answers: [{ questionId: "q1", selectedOptionIndex: 1 }],
            score: 100,
            timestamp: "2024-03-20T10:00:00Z",
          },
          // More attempts...
        ],
      },
      // More quizzes...
    ],
    projects: [
      {
        projectId: "project1",
        title: "Web Development Final Project",
        submissions: [
          {
            studentId: "student1",
            submissionLink: "http://portfolio.com/student1",
            grade: 95,
            feedback: "Excellent work with responsive design.",
            gradedBy: "instructor1",
            timestamp: "2024-03-21T10:00:00Z",
          },
          // More submissions...
        ],
      },
      // More projects...
    ],
    instructorFeedback: [
      {
        userId: "student1",
        rating: 4.5,
        comment: "Clear explanations and engaging lectures.",
        timestamp: "2024-03-22T10:00:00Z",
      },
      // More feedback...
    ],
    courseFeedback: [
      {
        courseId: "course1",
        feedbacks: [
          {
            userId: "student1",
            rating: 4,
            comment: "Well-structured and informative.",
            timestamp: "2024-03-23T10:00:00Z",
          },
          // More feedback...
        ],
      },
      // More courses...
    ],
    technologyFeedback: [
      {
        userId: "student1",
        rating: 3.5,
        comment: "User-friendly but could be more interactive.",
        timestamp: "2024-03-24T10:00:00Z",
      },
      // More feedback...
    ],
    classSessions: [
      {
        sessionId: "session1",
        date: "2024-03-25",
        participants: [
          { userId: "student1", role: "student", attended: true, timestamp: "2024-03-25T10:00:00Z" },
          { userId: "instructor1", role: "instructor", attended: true, timestamp: "2024-03-25T10:00:00Z" },
          // More participants...
        ],
      },
      // More sessions...
    ],
    individualEvaluations: [
      {
        evaluationId: "eval1",
        instructorId: "instructor1",
        studentId: "student1",
        dateScheduled: "2024-03-26",
        questionsAndAnswers: [
          { question: "Explain your understanding of JavaScript closures.", answer: "A closure is a function..." },
          // More Q&A...
        ],
        overallFeedback: "Strong understanding of concepts.",
        timestamp: "2024-03-26T10:00:00Z",
      },
      // More evaluations...
    ],
  };