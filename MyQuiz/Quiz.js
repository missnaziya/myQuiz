import React,{useState} from 'react'
import { createContext } from 'react'

const QuizContext = createContext();


const Quiz = (props) => {
    const[start,setStart] = useState(false);
    const [exit,setExit] = useState(false);

  return (
    <QuizContext.Provider value={{start,exit,setStart,setExit}}>
        {props.provider}
    </QuizContext.Provider>
  )
}

export default Quiz
export {QuizContext};