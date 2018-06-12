import React, { Component } from 'react'

import Chat from './Chat'
import Sidebar from './Sidebar'

class Main extends Component {
  render() {
    return (
      <div className = "Main">
        <Chat />
        <Sidebar />
      </div>
    )
  }
}

export default Main;