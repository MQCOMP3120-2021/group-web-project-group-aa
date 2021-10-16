import Avatar from '@material-ui/core/Avatar'
import React from 'react'

const AvatarIcon = props => {
	const { username } = props
	return <Avatar>{username}</Avatar>
}

export default AvatarIcon
