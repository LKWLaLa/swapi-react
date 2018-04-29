import React from 'react'

const Character = (props) => {
  let {name, image} = props.data

  let handleClick = () => {
    props.history.push(`/${props.id}`)
  }

  return(
    <div className="character-tile">
      <img className="character-img" 
          src={require(`../images/${image}`)}
          onClick={handleClick} 
          alt={name}/>
      <h3>{name}</h3>
    </div>
  )
}

export default Character;