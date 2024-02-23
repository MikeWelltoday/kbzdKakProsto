import React, {memo, useCallback, useState} from 'react'

export default {
    title: 'useState demo'
}


function generateData() {
    return 123141241
}

export const useStateExample = () => {

    const initialValue = generateData()

    const [counter, setCounter] = useState(initialValue)
    const [users, setUsers] = useState(['Drimich', 'Valera', 'Artem', 'Katya'])

    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <div>{counter}</div>
        </>
    )
}