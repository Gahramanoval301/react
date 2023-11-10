import React, { useReducer, useState } from 'react'
import '../inputWork1/index.css'
import ReducerCounter from './reducerCounter'
import { initialState } from './reducerCounter'
import './index.css'

const InputWork5 = () => {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <>
            <h1>Resetting and preserving of state</h1>
            <div className='form'>
                {isChecked ? (<h1>See you later!</h1>) : (<Counter />)}
                <label htmlFor="break">
                    <input onChange={() => setIsChecked(!isChecked)} type="checkbox" name="break" id="break" />
                    Take a break:
                </label>
            </div>
        </>
    )

}
function Counter() {
    const [state, dispatch] = useReducer(ReducerCounter, initialState)
    let [isFancy, setIsFancy] = useState(false)
    return (
        <>
            <div >
                <h2>Learning of Counter</h2>
                <div className={isFancy ? 'counter' : ' '}>
                    <h3>{state.count}</h3>
                    <button onClick={() => dispatch({ type: 'inc' })}>
                        Add one
                    </button>
                    <button onClick={() => dispatch({ type: 'reset' })}>
                        Reset
                    </button>
                    <button onClick={()=>setIsFancy(!isFancy) }>
                        get fancy
                    </button>
                    <br />
                </div>
            </div>
        </>
    )
}
export default InputWork5