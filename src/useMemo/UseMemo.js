import React, { useMemo, useState } from 'react';
import ChildeMemo from './ChildMemo1';

const UseMemo = () => {
  const [number, setNumber] = useState(0)
  const [count, setCount] = useState(0)
  const[counter , setCounter] = useState(0);

  const incrementNumber = () => setNumber(prev => prev + 1)
  const incrementCount = () => setCount(prev => prev + 1)
//   menghandle sebuah value array atau objek
  const isNumberEven = useMemo(() => {
    let i = 0;
    while(i < 200000000)i++
    return number % 2 === 0
  },[number]);

  const handleCounter = () => {
    setCounter(prev => prev + 1)
  }

  const nilaiCounterChild = useMemo(() => {
    return [1,2,3,4,5]
  },[counter])
  
  return(
    <div className="App">
      <button onClick={incrementNumber}>number : {number}</button>
      <div>{isNumberEven ? "even" : "odd"}</div>
      <button onClick={incrementCount}>count: {count}</button>
      <ChildeMemo data={nilaiCounterChild}/>
      <button onClick={handleCounter}>clik child counter</button>
    </div>
  )
}

export default UseMemo;