import React from 'react'
import { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0)

    const increase = () => {
        setCount((prev) => prev + 1 )
    }

    const decrease = () => {
        setCount((prev) => prev - 1 )
    }

    const valorDelContadorInicial = (e) => {
       const passedNumber = Number(e.target.value)
       setCount(passedNumber)
    }

  return (
    <>
    <div>Counter</div>
    <input type='number' placeholder='inicio del contador' onChange={valorDelContadorInicial} value={count}></input>
    <button onClick={decrease}> - 1 </button>
    <button onClick={increase}> + 1 </button>
    <button onClick={() => setCount(0)}>Reset</button>
    <p>{count}</p>
    </>

  )
}

export default Counter