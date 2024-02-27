import {FC, useEffect, useState} from 'react'
import s from './Clock.module.scss'

//========================================================================================
// 🎲 .T.Y.P.E.S.

export type ClockPropsType = {
    format: boolean
}

//========================================================================================
// 🧁 .C.O.P.O.N.E.N.T.

export const Clock: FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        // даже когда мы размантируем компоненту =>
        // интервал продолжит считать

        // => нужно остановить интервал
        // оставим функцию, которая будеит вызвана
        // когда компонента умрет или будет перерисована

        return () => {
            // остановим интерва
            clearInterval(intervalId)
        }

    }, [])

    function clockFormatter(time: number) {
        return time.toString().padStart(2, '0')
    }


    const hours = clockFormatter(date.getHours())
    const minutes = clockFormatter(date.getMinutes())
    const seconds = clockFormatter(date.getSeconds())

    // const [hoursMath, setHoursMath] = useState(0)
    // const [minutesMath, setMinutesMath] = useState(0)
    // const [secondsMath, setSecondsMath] = useState(0)
    //
    //
    // useEffect(() => {
    //     setHoursMath(-90 + date.getHours() * 15)
    //     setMinutesMath(-90 + date.getMinutes() * 6)
    //     setSecondsMath(-90 + date.getSeconds() * 6)
    // }, [date])

    return (
        <div className={s.clock}>

            {props.format ?
                <div className={s.digital}>
                    <span>{hours}</span>
                    :
                    <span>{minutes}</span>
                    :
                    <span>{seconds}</span>
                </div>
                :
                <div className={s.analog}>
                    <span
                        className={s.hoursArrow}
                        style={{transform: `translateY(-50%) rotate(${-90 + date.getHours() * 15}deg)`}}
                    ></span>
                    <span
                        className={s.minutesArrow}
                        style={{transform: `translateY(-50%) rotate(${-90 + date.getMinutes() * 6}deg)`}}
                    ></span>
                    <span
                        className={s.secondsArrow}
                        style={{transform: `translateY(-50%) rotate(${-90 + date.getSeconds() * 6}deg)`}}
                    ></span>
                </div>
            }

        </div>
    )
}