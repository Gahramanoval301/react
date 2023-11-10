import React, { useState } from 'react'
import '../inputWork1/index.css'

const InputWork2 = () => {
    let [answer, setAnswer] = useState('')
    let [status, setStatus] = useState('typing')

    if (status === 'success') return <h1>Thanks for your answer!</h1>

    function handleTextareaChange(e) {
        setAnswer(e.target.value)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        setAnswer('')
        setStatus('submitting')
        try {
            await SubmitForm(answer)
            setStatus('success')
        } catch (error) {
            return <p className='error'>{error.message}</p>
        }
    }
    function SubmitForm(answer) {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve()
            }, 1500);
        })

    }
    return (
        <>
            <h1 style={{ margin: '10px 14px' }}>Choosing the state structure</h1>
            <div className='form'>
                <p>How was your stay at The Prancing Pony? </p>
                <form onSubmit={handleSubmit}>
                    <textarea name="choosing" id="choosing"
                        value={answer}
                        onChange={handleTextareaChange}
                        disabled={status === 'submitting'}></textarea>
                    <button
                        disabled={answer.length < 5 || status === 'submitting'}
                        className='submit'>Submit</button>
                    {
                        status === 'submitting' && <p>Sending...</p>
                    }
                </form>
            </div>
        </>
    )
}

export default InputWork2