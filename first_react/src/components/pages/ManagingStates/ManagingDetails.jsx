import React from 'react'
import { useParams } from 'react-router';
import InputWork1 from './inputWork1';
import InputWork2 from './inputWork2';

const ManagingDetails = () => {
    const {inputW} = useParams()
    if (inputW === 'inputwork1') return <InputWork1/>
    else if (inputW === 'inputwork2') return <InputWork2/>
}

export default ManagingDetails