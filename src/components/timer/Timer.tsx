import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './Timer.module.scss'

//========================================================================================


function timeTransformer(seconds: number) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

export const Timer = () => {

    const [time, setTime] = useState(0)
    const [timerMode, setTimerMode] = useState(false)

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setTime(+e.currentTarget.value)
    }

    useEffect((() => {

        let intervalId: NodeJS.Timeout | null = null

        if (timerMode) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000)
        } else {
            clearInterval(intervalId!) // Остановка интервала, если таймер выключен
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }

    }), [timerMode])


    return (
        <div className={s.timer}>
            <input
                className={s.input}
                type="text"
                value={time}
                onChange={onChangeHandler}
            />
            <div className={s.buttonsContainer}>
                <button onClick={() => setTimerMode(true)}>START</button>
                <button onClick={() => setTimerMode(false)}>STOP</button>
            </div>
            <div className={s.shower}>{timeTransformer(time)}</div>
        </div>
    )
}
