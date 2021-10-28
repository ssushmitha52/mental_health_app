
import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
// import TextEditor from "./components/TextEditor";
// import Textsave from "./components/Textsave";
import Journal from "./components/pages/Journal";


function App() {
  return (
    <>   
        <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/journal' component={Journal} /> 
         </Switch> 
   
      </Router>
      

    </>

  );
}

export default App;



// import React from 'react';
// import Navbar from './components/Navbar';
// import './App.css';
// import Home from './components/pages/Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';


// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
        
//         <Switch>
//           <Route path='/' exact component={Home} />
//           <Route path='/services' component={Services} /> 
//           <Route path='/products' component={Products} />
//           <Route path='/sign-up' component={SignUp} />
        
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;




// import React, { useState } from 'react';

// export default function App() {
// 	const questions = [
// 		{
// 			questionText: 'What is the capital of France?',
// 			answerOptions: [
// 				{ answerText: 'New York', isCorrect: false },
// 				{ answerText: 'London', isCorrect: false },
// 				{ answerText: 'Paris', isCorrect: true },
// 				{ answerText: 'Dublin', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'Who is CEO of Tesla?',
// 			answerOptions: [
// 				{ answerText: 'Jeff Bezos', isCorrect: false },
// 				{ answerText: 'Elon Musk', isCorrect: true },
// 				{ answerText: 'Bill Gates', isCorrect: false },
// 				{ answerText: 'Tony Stark', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'The iPhone was created by which company?',
// 			answerOptions: [
// 				{ answerText: 'Apple', isCorrect: true },
// 				{ answerText: 'Intel', isCorrect: false },
// 				{ answerText: 'Amazon', isCorrect: false },
// 				{ answerText: 'Microsoft', isCorrect: false },
// 			],
// 		},
// 		{
// 			questionText: 'How many Harry Potter books are there?',
// 			answerOptions: [
// 				{ answerText: '1', isCorrect: false },
// 				{ answerText: '4', isCorrect: false },
// 				{ answerText: '6', isCorrect: false },
// 				{ answerText: '7', isCorrect: true },
// 			],
// 		},
// 	];

// 	const [currentQuestion, setCurrentQuestion] = useState(0);
// 	const [showScore, setShowScore] = useState(false);
// 	const [score, setScore] = useState(0);

// 	const handleAnswerOptionClick = (isCorrect) => {
// 		if (isCorrect) {
// 			setScore(score + 1);
// 		}

// 		const nextQuestion = currentQuestion + 1;
// 		if (nextQuestion < questions.length) {
// 			setCurrentQuestion(nextQuestion);
// 		} else {
// 			setShowScore(true);
// 		}
// 	};
// 	return (
// 		<div className='app'>
// 			{showScore ? (
// 				<div className='score-section'>
// 					You scored {score} out of {questions.length}
// 				</div>
// 			) : (
// 				<>
// 					<div className='question-section'>
// 						<div className='question-count'>
// 							<span>Question {currentQuestion + 1}</span>/{questions.length}
// 						</div>
// 						<div className='question-text'>{questions[currentQuestion].questionText}</div>
// 					</div>
// 					<div className='answer-section'>
// 						{questions[currentQuestion].answerOptions.map((answerOption) => (
// 							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
// }


// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom";


// import './App.css';
// import Header from './components/Header'
// import NotesListPage from "./components/pages/NotePageList";
// import Notepage from "./components/pages/Notepage";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Router>
//     <Navbar />
//     <div className="container dark">
//       <div className="app"> 
//       <Header />
//       <Route path="/" exact component={NotesListPage} />
//       <Route path="/note/:id" component={Notepage} />
//       </div>
//     </div>
//     </Router>
//   );
// }

// export default App;
