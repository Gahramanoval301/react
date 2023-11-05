import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incremenetByAmount } from './index.jsx'

export function CounterRT() {
    const count = useSelector((state) => {
        console.log(state, state.counter, state.counter.value);
        return state.counter.value
    })
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button onClick={()=> dispatch(incremenetByAmount(5))}>incremenetByAmount</button>
            </div>
        </div>
    )
}