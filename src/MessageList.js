import React from 'react'

import Message from './Message'

const MessageList = (props) => {
  return (
    <div className="MessageList" style={styles.messageList}>
      {
        props.messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))
      }
    </div>
  )
}

const styles = {
  messageList: {
    backgroundColor: 'white',
    flex: '1',
    paddingBottom: '1rem',
    overflowY: 'scroll',
  },
  messageListAnn: {
    padding: '2rem 1rem',
  },
  messageListAnnH2: {
    fontSize: '1.5rem',
  },
}

export default MessageList