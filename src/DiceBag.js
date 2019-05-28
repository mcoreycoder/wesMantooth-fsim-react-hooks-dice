import React, { useState } from 'react'

const Die = ({ numSides }) => {
    const [roll, setRoll] = useState(0) // [roll is state that holds a single value, setRoll is the function to update the roll state value] = useState(defaultState) is a function to set up the hook and set default value for this hooks state 
    const [history, setHistory] = useState([]) // [history is state which is an array to hold a collection, setHistory is a function to update the history state collection] = useState(defaultState) is a function to set up the hook and set default value for this hooks state  
    // console.log('sides', numSides, '| roll', roll, '| history', history) // used for checking data flow
    let newHistory = history // variable used for adding the roll state to before updating the history state
       
    return (
        <div className='box'>
            <pre>
                Roll : {roll} | Sides : {numSides} {/** roll is pulled from state, numSides is the prop passed in from <Dice dice={dice}/> in the diceBag to the <Die key={index} numSides={die.numSides}/> in Dice*/}
            </pre>
            {history.join(', ')} {/** takes the histroy collection and displays as string with comma seperating each item of the array */}
            <button onClick={() => { setRoll(Math.ceil(Math.random() * numSides));  if(roll !== 0 ){
        // console.log('newHistory', newHistory) // used to check data
        // console.log('history', history) // used to check data
        newHistory= [...newHistory,roll] // updates newHistory by taking in the spread of the current newHistory array and adding the roll state value to it.
    }; setHistory(newHistory) }}> {/** updates the history state */}
                Roll
            </button>
        </div>
    )
}

// takes in an array called dice as a prop from <Dice dice={dice}/> and maps to <Die> where key is set to the array index and numSides is a prop being passed down
const Dice = ({ dice }) => {
    const displayDice = dice.map((die, index) => <Die key={index} numSides={die.numSides}/>)
    return(
        <div>
            {displayDice} {/** shows the mapped array as individual <Die> */}
        </div>
    )
}

// default array for dice initial state
const defaultDice = [
    { numSides: 6 },
    { numSides: 10 },
    { numSides: 12 },
    { numSides: 20 }
]

// has state of dice and input. 
const DiceBag = () => {
    const [dice, setDice] = useState(defaultDice) // [dice is state which is an array to hold a collection, setDice is a function to update the state of dice] = useState(defaultState) is a function to set up the hook and set default value for this hooks state 
    const [input, setInput] = useState(0) // [input is state which is a number to hold a single value, setInput is a function to update the state of input] = useState(defaultState) is a function to set up the hook and set default value for this hooks state 
    const newDice = dice // takes in the current state of dice
    return (
        <div>
            <input type="number" onChange={(event) => setInput(event.target.value)} /> {/** input state is updated with onChange event*/ }
            <button onClick={() => setDice([...newDice,{numSides:input}])}>Add Die</button> {/** takes the input and adds it to the newDice array then updates the state for dice */}
            <Dice dice={dice}/> {/** <Dice> takes in the state "={dice}" to pass as a prop with the name of dice, example: nameOfProp={state} */}
        </div>
    )
}

export default DiceBag

// OR Write the other functional components
