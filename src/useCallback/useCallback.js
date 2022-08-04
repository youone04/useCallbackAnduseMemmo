import React, { useState, useCallback } from 'react';

export default () => {
  const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0)
//   useCallback untuk handle sebuah fungsi
  const incrementNumber = useCallback(() => {
    setNumber(number + 1)
  },[number])
  const incrementCount = useCallback(() => {
    setCount(count + 1)
  },[count])
  
  return(
    <div>
    <TextCus/>
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

const TextCus = React.memo(() => {
    console.log('text')
    return(
        <>
        <h1>hallo text</h1>
        </>
    )
})