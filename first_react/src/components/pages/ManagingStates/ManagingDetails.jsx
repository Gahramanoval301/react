import React from 'react'
import { useParams } from 'react-router';
import InputWork1 from './inputWork1';
import InputWork2 from './inputWork2';
import InputWork3 from './inputWork3';
import InputWork4 from './inputWork4';

const ManagingDetails = () => {
    const {inputW} = useParams()
    if (inputW === 'inputwork1') return <InputWork1/>
    else if (inputW === 'inputwork2') return <InputWork2/>
    else if (inputW === 'inputwork3') return <InputWork3/>
    else if (inputW === 'inputwork4') return <InputWork4/>
}

export default ManagingDetails