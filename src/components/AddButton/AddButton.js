import React, {useState, useEffect} from 'react'
import './AddButton.scss'
import axios from 'axios'

const AddButton = props => {
    const [options, setOptions] = useState([]);
    const [message, setMessage] = useState(false);
    const getWords = () => {
        setMessage('loading...')
    }
    const optionSelect = (word) => {
        props.pushWord(word);
        setOptions([]);
        setMessage('Come back later')
    }
    useEffect(()=>{
        if(message === 'loading...'){
            axios.get('https://random-word-api.herokuapp.com/word?number=10').then(res => {
                if(res.data) setOptions(res.data)
                setMessage(false)
            })
        }
    }, [message])
    return (
        <div className={`AddButton`}>
            {
                (options.length === 0 && message === false) &&
                <div className={`global-button`} onClick={getWords}>Get a new Word</div>
            }
            {
                message !== false && 
                <div className={`message`}>{message}</div>
            }
            {
                options.length > 0 && 
                <div className={`options`}>
                    {
                        options.map((option, optionIndex) => {
                            return <div className={`option global-button`} onClick={()=>optionSelect(option)} key={`option-${optionIndex}`}>{option}</div>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default AddButton