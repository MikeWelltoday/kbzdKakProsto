import {ChangeEvent, useEffect, useState, KeyboardEvent} from 'react'

export default {
    title: '25 - UseEffect Practise'
}


export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])

    return (
        <>
            <div>Hello, counter: {counter}</div>
        </>
    )
}

export const ResetExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('RENDER')

    useEffect(() => {
        console.log('Effect Occurred')


        return () => {
            console.log('USE-EFFECT is DEAD')
        }

    }, [])

    return (
        <>
            <div>Hello, counter: {counter}</div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>[ + ]
            </button>
        </>
    )
}


export const OnKeyTrackerExample = () => {

    const [text, setText] = useState('')

    useEffect(() => {

        function handler(event: any) {
            setText(text + event.key)
        }

        // подписываемся
        window.document.addEventListener('keypress', handler)

        // отписываемся
        return () => window.document.removeEventListener('keypress', handler)

    }, [text])

    return <div>Typed: {text}</div>
}















