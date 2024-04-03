import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'
import { useState } from "react"

function App() {

  const [userInput, setUserInput] =useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 5
  })

  const validInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, value){

    setUserInput((prevValue)=>{
        return (
            {
                ...prevValue,
                [inputIdentifier]: +value
            }
        )
    })
  }

  return (
    <>
    <Header/>
    <UserInput userInputData={userInput} handleChangefx={handleChange} />
    {!validInput && <p className='center'>Please enter valid Duration</p>}
    {validInput && <Results userInputData={userInput}/>}
    </>
  )
}

export default App
