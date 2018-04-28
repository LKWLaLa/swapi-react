import React, {Component} from 'react'
import StarWars from '../starWars.json'
import Character from './Character'

class Home extends Component {

  characters = () => {
    return StarWars.characters.map(
      (character, index) => <Character data={character} 
      history={this.props.history}
      key={index}/>
    )
  }

  render(){
    return(
      <div>
        {this.characters()}
      </div>
    )
  }
} 

export default Home;