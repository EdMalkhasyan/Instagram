import './Notifications.css'
import IMAGES from '../../images'
import { useSelector } from 'react-redux'
import NotificationItem from '../NotificationItem/NotificationItem'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { memo } from 'react'

function Notifications() {
	const { usersData } = useSelector(selectUsers)
	
  return (
	 <div className='Notification'>
		<div className='Notification-body'>
			<h1>Notifications</h1>
			<div className='Notic-this'>
				<h2>This Week</h2>
				{
					usersData.map(el => <NotificationItem key={el.id} img={IMAGES.cover1} name={el.username}/>)
				}
			</div>
			<div className='Notic-this'>
				<h2>This Month</h2>
				{
					usersData.map(el => <NotificationItem key={el.id} img={IMAGES.cover1} name={el.username}/>)
				}
			</div>
			<div className='Notic-this'>
				<h2>Earlier</h2>
				{
					usersData.map(el => <NotificationItem key={el.id} img={IMAGES.cover1} name={el.username}/>)
				}
			</div>
		</div>
	 </div>
  )
}

export default memo(Notifications)
