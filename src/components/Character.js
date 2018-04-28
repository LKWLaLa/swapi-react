import React, {Component} from 'react'

const Character = (props) => {
  let {name, url, image} = props.data

  return(
    <div>
      <img class="character-img" src={require(`../images/${image}`)}/>
    </div>
  )
}

export default Character;