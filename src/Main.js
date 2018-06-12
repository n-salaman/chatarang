import React, { Component } from 'react'

import Chat from './Chat'
import Sidebar from './Sidebar'

class Main extends Component {
  render() {
    return (
      <div className = "Main" style={styles}>
        <Sidebar user={this.props.user} />
        <Chat user={this.props.user} />
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'strech',
  height: '100vh',
}

export default Main