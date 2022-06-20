import React from 'react'

export default function DrumPad(props) {
    return (
        <div 
            className='drum-pad'
            id={props.id}
            onClick={props.click}
        >
            <h3>{props.name}</h3>
            <audio
                src={props.audio}
                className="clip"
                id={props.name}
            />
        </div>
    )
}