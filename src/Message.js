import React from 'react'

const Message = (props) => {
  return (
    <div className="Message" style={styles.messaDet}>
      {props.message.userName}: {props.message.body}
    </div>
  )
}

const styles = {
  messa: {
    display: 'flex',
    marginTop: '1rem',
    padding: '0 1rem',
  },

  messaDet: {
    flex: '1',
    paddingLeft: '0.5rem',
  },
}

export default Message