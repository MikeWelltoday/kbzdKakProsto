import React, {useState, memo, FC} from 'react'

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter: FC<{ count: number }> = (props) => {
    return <div>{props.count}</div>
}

const UsersWithoutMemo: FC<{ users: Array<string> }> = (props) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const NewMessagesCounterWithMemo = memo(NewMessagesCounter)
const UsersWithMemo = memo(UsersWithoutMemo)


export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    function addUser() {
        setUsers(['NEW_USER', ...users])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>addUser</button>

            <NewMessagesCounterWithMemo count={counter}/>
            <UsersWithMemo users={users}/>
        </>
    )
}