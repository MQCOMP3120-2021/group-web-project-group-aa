import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@mui/material/CircularProgress'

const loading = makeStyles({
	root: {
		color: 'white',
		padding: '0 15px'
	}
})
const Loading = () => {
	const loadingStyle = loading()
	return <CircularProgress size={15} classes={{ root: loadingStyle.root }} />
}

export default Loading
