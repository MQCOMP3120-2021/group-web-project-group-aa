import React from 'react'
import Alert from '@mui/material/Alert'
import { makeStyles } from '@material-ui/core/styles'

const alertStyle = makeStyles({
	root: {
		position: 'absolute',
		bottom: 20
	}
})
const Notification = props => {
	const { text, color, severity } = props
	const alert = alertStyle()
	return (
		<Alert classes={{ root: alert.root }} color={color} severity={severity}>
			{text}
		</Alert>
	)
}

export default Notification
