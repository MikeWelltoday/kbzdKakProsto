import React, {useMemo, useState} from 'react'

//=================================================================================

export default {
    title: 'USE-MEMO'
}

//=================================================================================

export const Example1 = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resA = 1
    let resB = 1

    resA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            resA *= i
        }
        return resA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resB *= i
    }


    return (
        <>
            <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>

            <div>RESULT-A: {resA}</div>
            <div>RESULT-B: {resB}</div>
        </>
    )

}


