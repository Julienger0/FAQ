import React, { useState } from 'react';
import data from './Data';
import Question from './Question';
import './style.css'

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    
    <div className="container  content mt-5 row">
      <h3 className='col-auto pt-3'>F.A.Q :</h3>
      <div className='questions container col '>
        {questions.map(question=>{return (<Question key={question.id} question={question}/>)})}
      </div>
    </div>
  );
}

export default App;
