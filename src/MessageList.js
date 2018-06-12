import React from 'react'

import Message from './Message'

const MessageList = () => {
  const message = [
    {
      id: 1,
      userName: 'Noah',
      body: 'cool message',
    },
    {
      id: 2,
      userName: 'Chel',
      body: 'even cooler message',
    },
  ]
  
  
  return(
    <div className="MessageList">
      {
        message.map(msg => (
          <Message key={msg.id} message={msg} />
        ) )
      }
    </div>
  )
}

export default MessageList