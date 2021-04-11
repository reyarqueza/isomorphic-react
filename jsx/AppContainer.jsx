import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import App from './App.jsx'

class AppContainer extends Component {
  render() {
    if (!this.props.nav) {
      return null
    }

    return <App {...this.props} />
  }

  componentDidMount() {
    this.props.fetchData()
  }
}

function mapStateToProps(state) {
  const {
    nav,
    hero,
    cards,
    footer
  } = state

  return {
    nav,
    hero,
    cards,
    footer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
