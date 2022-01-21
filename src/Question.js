import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({ question }) {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div className='container question border p-2 m-2 row'>
            <div className='col-10'>
                <h4>{question.name}</h4>
                {showAnswer ? (<p>{question.answer}</p>) : (null)}
            </div>

            <button className='btn col-1' onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>

        </div>

    )
}
export default Question