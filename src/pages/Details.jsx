import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
  return (
    <div>
      Detail {id}
    </div>
  )
}

export default Details