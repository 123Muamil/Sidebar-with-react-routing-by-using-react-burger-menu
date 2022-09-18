import React from 'react'
const Items = ({ currentItems }) => {
  return (
    <div>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </div>
  )
}
export default Items
