import React, { useState } from 'react'
import '../style/component/searchBar.scss'
import searchIcon from '../asset/search.svg'

const SearhBar = props => {
	const { searchBarClass, placeholder, search } = props
	const [searchText, setSearchText] = useState('')

	const enterSearch = e => {
		if (e.keyCode === 13) {
			search(searchText)
		}
	}
	return (
		<div className={`searchBar ${searchBarClass}`} onKeyUp={enterSearch}>
			<input
				placeholder={placeholder}
				onChange={e => {
					setSearchText(e.target.value)
				}}
			/>
			<img
				src={searchIcon}
				onClick={() => search(searchText)}
				alt="searchIcon"
			/>
		</div>
	)
}

export default SearhBar
