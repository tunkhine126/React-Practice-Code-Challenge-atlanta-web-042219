import React, { Fragment } from 'react'
import Sushi from '../components/Sushi';

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" key={Sushi.id} style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table