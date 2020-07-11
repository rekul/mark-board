import React, {useState, useEffect} from 'react'
import './Board.scss'

const Board = props => {
    const playAudio = (word, wordIndex) => {
        // document.querySelectorAll('audio')[wordIndex].play();
        var msg = new SpeechSynthesisUtterance(word);
        window.speechSynthesis.speak(msg);
        props.setLastClickedWord(word);
    }
    return (
        <div className={`Board`}>
            {
                props.words.map((word, wordIndex)=>{
                    return <div className={`button`} 
                    key={`${word}`}
                    onClick={()=>playAudio(word)}
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