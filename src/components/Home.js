import React, {Component} from 'react'
import StarWars from '../starWars.json'
import Character from './Character'

class Home extends Component {

  characters = () => {
    return StarWars.characters.map(
      (character, index) => <Character data={character} 
      history={this.props.history}
      key={index} id={index}/>
    )
  }

  render(){
    return(
      <div>
        <h1>Star Wars Characters and Their Films</h1><br />
        <div className="flex-container">
          {this.characters()}
        </div>
      </div>
    )
  }
} 

export default Home;