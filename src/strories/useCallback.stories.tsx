import React, {memo, useCallback, useMemo, useState} from 'react'

export default {
    title: 'useCallback demo'
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Js', 'CSS', 'HTML'])

    const AddBook = useCallback(() => setBooks([...books, 'Angular ' + new Date().getDate()]), [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Books addBook={AddBook}/>
        </>
    )
}

const Books = memo((props: { addBook: () => void }) => {
    console.log('BooksSecret')
    return <button onClick={props.addBook}>add Book</button>
})






