import React from 'react'

const Ingredient = ({item, addOn, onRemove, inStack,}) => {
  return (
    <li style={{backgroundColor : item.color}}>
        {item.name}
        {inStack ? (
        <button onClick={onRemove}>X</button>
        ) : (
        <button onClick={addOn}>+</button>
        )}
    </li>
  )
}

export default Ingredient