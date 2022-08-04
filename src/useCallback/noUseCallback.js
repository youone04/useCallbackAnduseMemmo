import React, { useState } from 'react';

export default () => {
  const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0)
  const incrementNumber = () => {
    setNumber(number + 1)
  }
  const incrementCount = () => {
    setCount(count + 1)
  }
  
  return(
    <div>
      <Show label="number" val={number}/>
      <Button label="number" action={incrementNumber}/>
      <Show label="count" val={count}/>
      <Button label="count" action={incrementCount}/>
    </div>
  )
}

const Show = React.memo(({ label, val}) => {
  console.log(`${label} inside show render`)
  return(
    <div>
      <div>{label} {val}</div>
    </div>
  )
})

const Button = React.memo(({label, action }) => {
  console.log(`${label} inside button render`)
  return(
    <div>
      <button onClick={action}>add {label}</button>
    </div>
  )
})