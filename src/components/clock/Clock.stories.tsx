import {Clock, ClockPropsType} from './Clock'
import {FC, useEffect, useState} from 'react'

export default {
    title: '⌚ CLOCK',
    component: Clock
}

export const ClockFrame: FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())


    return (
        <div>
            <span>{date.getHours().toString().padStart(2, '0')}</span>
            :
            <span>{date.getMinutes().toString().padStart(2, '0')}</span>
            :
            <span>{date.getSeconds().toString().padStart(2, '0')}</span>
        </div>
    )
}