import React, { useState } from 'react'

const Die = ({ numSides }) => {
    const [roll, setRoll] = useState(0)
    const [history, setHistory] = useState([])
    // console.log('roll', roll, '| sides', numSides,'| history', history)
    let newHistory = history
    
    var rollPromise = new Promise(function(resolve, reject) {})
   
    return (
        <div className='box'>
            <pre>
                Roll : {roll} | Sides : {numSides} 
            </pre>
            {history.join(', ')}
            <button onClick={() => { setRoll(Math.ceil(Math.random() * numSides));  if(roll !== 0 ){
        console.log('newHistory', newHistory)
        console.log('history', history)
        newHistory= [...newHistory,roll]
    }; setHistory(newHistory) }}>
                Roll
            </button>
        </div>
    )
}

const Dice = ({ dice }) => {
    const displayDice = dice.map((die, index) => <Die key={index} numSides={die.numSides}/>)
    return(
        <div>
            {displayDice}
        </div>
    )
}

const defaultDice = [
    { numSides: 6 },
    { numSides: 10 },
    { numSides: 12 },
    { numSides: 20 }
]
const DiceBag = () => {
    const [dice, setDice] = useState(defaultDice)
    const [input, setInput] = useState(0)
    const newDice = dice
    return (
        <div>
            <input type="number" onChange={(event) => setInput(event.target.value)} />
            <button onClick={() => setDice([...newDice,{numSides:input}])}>Add Die</button>
            <Dice dice={dice}/>
        </div>
    )
}

export default DiceBag

// OR Write the other functional components
