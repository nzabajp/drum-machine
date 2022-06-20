import React from 'react'
import DrumPad from './DrumPad'
import drumDB from './drumDB'

export default function DrumMachine() {
    const initialDisplay = ""

    const [display, setDisplay] = React.useState(initialDisplay)

    function handleClick(name) {
        setDisplay(name)
        setTimeout(() => {
            setDisplay(initialDisplay)
        }, "1000")
        //to play sound when div is clicked
        const sound = document.getElementById(name)
        sound.currentTime = 0
        sound.play()
    }
    
    //Adding the keydown event listener
    React.useEffect(() => {
        document.addEventListener("keydown", keyPressed)

        return () => document.removeEventListener("keydown", keyPressed)
    },[keyPressed])

    function keyPressed (event) {
        const dbKeyCode = drumDB.filter(item => item.keyCode === event.keyCode)
        handleClick(dbKeyCode[0].name)
    }

    

    const drumPad = drumDB.map(item => (
        <DrumPad 
            id={item.id}
            name={item.name}
            audio={item.audio}
            click={() => handleClick(item.name)}
            key={item.id}
        />
    ))
    
    return (
        <div className='drum-container'>
            <h3 id="display" className='display'>{display}</h3>
            <div className='drum-pads'>
                {drumPad}
            </div>
        </div>
    )
}