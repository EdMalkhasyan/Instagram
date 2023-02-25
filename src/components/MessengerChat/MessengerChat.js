import { useSelector } from 'react-redux'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerChat.css'

function MessengerChat() {
  const { currentDialog } = useSelector(selectMessages)
  const { currentUser } = useSelector(selectUsers)

  return (
    <div className='MessengerChat'>
      {
        currentDialog.map(({id, body, fromId}) => (
          <>
            <h1
              key={id}
              className={fromId === currentUser.id ? 'currentUserDialog' : 'activeUserDialog'}
            >{body}</h1>
          </>
        ))
      }
    </div>
  )
}

export default MessengerChat
