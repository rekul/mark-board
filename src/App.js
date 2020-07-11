import React, {useState, useEffect} from 'react'
import Board from './components/Board/Board.js'
import AddButton from './components/AddButton/AddButton.js'
import Bot from './components/Discord/Bot.js'

import _ from 'lodash'
import './sass/reset.scss'
import './sass/fonts.scss'
import './sass/global-styles.scss'
import './sass/layout.scss'

const App = props => {
  const [lastClickedWord, setLastClickedWord] = useState(null);
  const [words, setWords] = useState([
    "spurge",
    "nonpossessions",
    "losingly",
  ]);

  const pushWord = (word) => {
      let temp = _.clone(words)
      temp.push(word);
      setWords(temp);
  }

  return <div className={`App`}>
      <Board words={words} setLastClickedWord={setLastClickedWord}/>
      <AddButton pushWord={pushWord}/>
      <Bot lastClickedWord={lastClickedWord}/>
  </div>
}

export default App
