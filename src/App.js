import React, { Component } from 'react'
import axios from 'axios'
import Cardd from './Cardd'
import "./index.css"

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
       <Cardd products ={this.state.array} />
      </div>
    )
  }
}