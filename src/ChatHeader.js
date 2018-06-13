import React from 'react'

const ChatHeader = () => {
    return (
      <div className="ChatHeader" style={styles.chatHead}>
        <div className="roomInfo">
          <h2 style={styles.roomH2}>#general</h2>
          <p style={styles.roomP}>Announcements and general chat</p>
        </div>
      </div>
    )
}

const styles = {
  chatHead: {
    backgroundColor: '#f3f3f3',
    borderBottom: '1px solid #ccc',
    height: '3rem',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
  },

  roomH2: {
    fontSize: '1.1rem',
    margin: '0',
  },

  roomP: {
    color: '#999',
    margin: '0',
    fontSize: '0.8rem',
  },
}

export default ChatHeader