import React from 'react'
import { useState } from 'react'
import './index.css'
const InputWork1 = () => {
    // Create states
    let [error, setError] = useState(null)
    let [answer, setAnswer] = useState('')
    let [status, setStatus] = useState('typing') //typing, submitting, success

    if (status === 'success') return <h1>That's right. You are is JS developer!</h1>

    function handleTextareaChange(e) {
        setAnswer(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        try {
            await SubmitForm(answer)
            setStatus('success')
        } catch (error) {
            setStatus('typing')
            setError(error.message)
        }
    }

    async function SubmitForm(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = (answer !== '1995')
                if (shouldError) {
                    reject(new Error('good guess but false answer, try again!'))
                }
                else {
                    resolve()
                }
            }, 1500);
        })

    }

    return (
        <div className='form'>
            <h2>JavaScript quiz</h2>
            <p>Which year JavaScript is created?</p>
            <form onSubmit={handleSubmit}>
                <textarea name="answer" id="answer"
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <button className='submit'
                    disabled={status === 'submitting' || answer.length === 0}
                >Submit</button>
                {
                    error !== null && <p className='error'>{error}</p>
                }
            </form>
        </div>
    )
}

export default InputWork1