import './NotificationItem.css'

function NotificationItem({img, name}) {
  return (
		<div className='NotificationItem'>
			<div className='NotificationItem-body'>
				<div className="status-card">
					<div className="profile-pic"><img src={img} alt=""/></div>
				</div>
				<div>
					<span>{name}</span><span> started following you. 2d</span>
				</div>
			</div>
			
			<div className='NotificationItemBtn'>
				Follow
			</div>
		</div>
  )
}

export default NotificationItem
