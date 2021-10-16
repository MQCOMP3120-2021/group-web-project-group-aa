import React, { useState } from 'react'
import TabPanel from './tabPannel'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

const TabSwitch = props => {
	const [value, setValue] = useState(0)
	const { children, tabOptions, switchTab, isMultiPannel = true } = props
	const handleChange = (event, newValue) => {
		switchTab(newValue)
		setValue(newValue)
	}
	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange}>
					{tabOptions.map(item => {
						return <Tab key={item.id} label={item.tabLable} />
					})}
				</Tabs>
			</Box>
			{isMultiPannel
				? tabOptions.map(item => {
						return (
							<TabPanel value={value} index={item.id} key={item.id}>
								{children[item.id]}
							</TabPanel>
						)
				  })
				: children}
		</Box>
	)
}

export default TabSwitch
