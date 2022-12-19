import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      array:[]
    }
  }
  componentDidMount(){
    axios.get(' https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',{
      headers:{Authorization:"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"}
    }).then((res)=>{this.setState({array:res.data})})
  }
  render() {
    return (
      <div>
        {this.state.array.map(element=><h1 key={element.id}>{element.name}</h1>)}
      </div>
    )
  }
}