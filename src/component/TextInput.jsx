import React from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles'

const textStyles = makeStyles({
	root: {
		width: '100%',
		marginBottom: 10,
		marginTop: 20
	}
})

const TextInput = props => {
	const { type, value, label, styleClass, textHandle } = props
	const inputStyles = textStyles()
	return (
		<TextField
			label={label}
			value={value}
			type={type}
			classes={{ root: inputStyles.root } || styleClass}
			onChange={e => textHandle(e.target.value)}
		/>
	)
}

export default TextInput
