import React, {useState} from 'react'
import './App.css'
import {AccordionUncontrolled} from './components/accordion/AccordionUncontrolled'
import {OnOffDimychControlled} from './components/OnOffDimych/OnOffDimychControlled'
import {OnOffDimychUncontrolled} from './components/OnOffDimych/OnOffDimychUncontrolled'
import {AccordionControlled} from './components/accordion/AccordionControlled'
import {RatingControlled} from './components/rating/RaitingControlled'
import {RatingUncontrolled} from './components/rating/RatingUncontrolled'
import {Timer} from './components/timer/Timer'

//=================================================================================================================================================

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5;

//=================================================================================================================================================

function App() {
    const [onOff, setOnOff] = useState<boolean>(true)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [ratingValue, setRatingValue] = useState<ratingValueType>(0)

    return (
        <div className="App">
            <Timer/>
            {/*<OnOffDimychControlled onClick={setOnOff} onOff={onOff}/>*/}
            {/*<OnOffDimychUncontrolled/>*/}
            {/*<AccordionControlled*/}
            {/*    onClick={() => setCollapsed(!collapsed)}*/}
            {/*    onChange={collapsed}*/}
            {/*/>*/}
            {/*<AccordionUncontrolled/>*/}
            {/*<RatingControlled onClick={setRatingValue} value={ratingValue}/>*/}
            {/*<RatingUncontrolled/>*/}
        </div>
    )
}

export default App



