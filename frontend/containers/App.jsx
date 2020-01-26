import './App.style.sass'
import React from 'react'
import { connect } from "react-redux"
import Example from './Example/index.jsx'

class App extends React.Component {
  state = {}
  render() {
    return (
      <Example />
    )
  }
}

export default connect(
    function mapStateToProps(state){ 
      return {}
    },
    function mapDispatchToProps(state){
      return {}
    }
  )(App);