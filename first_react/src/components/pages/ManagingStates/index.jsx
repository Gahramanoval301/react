import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const ManagingStates = () => {
    return (
        <div>
        <Link to='/managingStates/inputwork1'>InputWork1</Link>
        <Link to='/managingStates/inputwork2'>InputWork2</Link>
    </div>
  )

}

export default ManagingStates