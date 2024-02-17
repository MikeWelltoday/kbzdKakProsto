import React, {useState, memo, FC} from 'react'

export default {
    title: 'useCallback demo'
}


export const LikeUseCallback = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    function addUser() {
        setUsers(['NEW_USER', ...users])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>addUser</button>

        </>
    )
}