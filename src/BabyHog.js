import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import sunBaby from './assets/sun-eyes.png'
import blueBaby from './assets/blue-eyes.png'
import glowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      weight: 0.5
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    let newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    newWeight < 0 ? newWeight = 1 : newWeight
    this.setState({
      weight: newWeight
    })
  }

  determineEyeColor = () => {
    const color = this.props.eyeColor;
    switch(color) {
      case 'blue':
        return blueBaby;
        break;
      case 'sun':
        return sunBaby;
        break;
      case 'glowing':
        return glowingBaby;
        break;
      default: normalBaby
    }
  }

  render() {
    return (
      <li className="hogbabies">
        <h1>{this.props.name}</h1>
        <h3>Weight: {this.state.weight} </h3>
        <h3>Hobby: {this.props.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>

        <Button onClick={this.changeWeight} name="+">
          Increase Weight
        </Button>
        <Button onClick={this.changeWeight} name="-">
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={this.determineEyeColor()} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>

      </li>
    )
  }
}
