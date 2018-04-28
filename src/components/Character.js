import React from 'react'

const Character = (props) => {
  let {name, url} = props.data
  
  return(
    <div>
      {name}
    </div>
  )
}

export default Character;