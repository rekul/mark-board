import React, {useState, useEffect} from 'react'
import './Board.scss'

const Board = props => {
    const playAudio = (wordIndex) => {
        document.querySelectorAll('audio')[wordIndex].play();
    }
    return (
        <div className={`Board`}>
            {
                props.words.map((word, wordIndex)=>{
                    return <div className={`button`} 
                    key={`${word}`}
                    onClick={()=>playAudio(wordIndex)}
                    >
                            <div className={`button-button`}>
                                <div className={`button-label`}>{word}</div>
                        </div>
                        <audio src={`./audio/${word}.mp3`}/>
                    </div>
                })
            }
        </div>
    )
}

export default Board