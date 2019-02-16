import React, { Component } from 'react'
import '../02-CSS/style.css'

class Main extends Component {

  state = {
    num1: '',
    num2: '',
    total: 0
  }

  addNumbers = () => {
    console.log('Function executed...')
    // console.log('The state values are: ', this.state)   
    
    let input1 = parseInt(this.state.num1)
    let input2 = parseInt(this.state.num2)
    let result = input1 + input2

    this.setState({ total: result })

  }

  handleChangeInput1 = (e) => {
    this.setState({ num1: e.target.value })
  } 

  handleChangeInput2 = (e) => {
    this.setState({ num2: e.target.value })
  }

  render() {

    return (
      <div>
        <h1>Add two numbers</h1>

        <span>Input1: </span>
        <input onChange={ (e) => { this.handleChangeInput1(e) } } type="text"/>

        <br/>

        <span>Input2: </span>
        <input onChange={ (e) => { this.handleChangeInput2(e) } }  type="text"/>

        <br/><br/>

        <button onClick={ () => { this.addNumbers() } } >Add Numbers</button>

        <br/><br/>

        <div id='result' >{ this.state.total }</div>

      </div>

    )
  }
}

export default Main