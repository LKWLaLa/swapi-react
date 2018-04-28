import React from 'react'

const Character = (props) => {
  let {name, image} = props.data
  let path = name.replace(/\s+/g, '-')

  let handleClick = () => {
    props.history.push(`/${path}`)
  }

  return(
    <div>
      <img className="character-img" 
          src={require(`../images/${image}`)}
          onClick={handleClick} 
          alt={name}/>
    <h3>{name}</h3>
    </div>
  )
}

export default Character;