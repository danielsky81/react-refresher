import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0)

  const increase = () => {
    setState(prevState => prevState + 1)
  }

  const decrease = () => {
    setState(state - 1)
  }

  return (
    <>
      <p>Counter is: {state}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  )
}

export default Counter;