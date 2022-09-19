import React from "react"
import "./Info.css"

const Info = ({ bombs = 0, flaggedCells }) => {
  return (
    <div className='info'>
      <b>{bombs - flaggedCells}</b> bombs left !
    </div>
  )
}

export default Info
