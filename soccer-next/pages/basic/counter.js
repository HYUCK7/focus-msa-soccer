import React, {useState} from "react";
import {useSelector,  useDispatch} from 'react-redux'
import styles from 'styles/counter.module.css';

export default function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const[incrementAmount, setIncrementAmount] = useState('0')
  const incrementValue = Number(incrementAmount) || 0

  return (<>
    <button onClick={() => setCount(count+1)}> 더하기 </button>
    <button onClick={() => setCount(count-1)}> 빼기 </button>
    <div>{count}</div>
    </>
  )
}
