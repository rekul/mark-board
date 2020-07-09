import React, {useState, useEffect} from 'react'
import Board from './components/Board/Board.js'
import AddButton from './components/AddButton/AddButton.js'

import _ from 'lodash'
import './sass/reset.scss'
import './sass/fonts.scss'
import './sass/global-styles.scss'
import './sass/layout.scss'

const App = props => {
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
      <Board words={words}/>
      <AddButton pushWord={pushWord}/>
  </div>
}

export default App
