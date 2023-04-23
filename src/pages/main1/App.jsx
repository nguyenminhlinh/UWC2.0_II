import { useState } from 'react'
import { Calendar } from './Calendar'
import { Assignment_1 } from './Assignment-1'
import { Assignment_2 } from './Assignment-2'
import { Assignment_3 } from './Assignment-3'

import './styles/App.css'

function App({index}) {
  const [state, setState] = useState(index);

  return (
    <div className="App">
      {state === 0 && <Calendar/>}
      {state === 1 && <Assignment_1 setState={setState} />}
      {state === 2 && <Assignment_2 setState={setState} />}
      {state === 3 && <Assignment_3 setState={setState} />}
    </div>
  )
}

export default App
