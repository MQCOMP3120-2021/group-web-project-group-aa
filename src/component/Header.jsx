import React from 'react'
import SearchBar from './SeachBar'
import AvatarIcon from './Avatar.jsx'
import writeIcon from '../asset/write.svg'
import '../style/component/header.scss'

const Header = props => {
	const { searchBarClass, search, placeholder, username } = props

	return (
		<header className="header">
			<div className="header__icon">icon</div>
			<div className="header__search">
				<SearchBar
					search={search}
					placeholder={placeholder}
					searchBarClass={searchBarClass}
				/>
			</div>
			<div className="header__user">
				<AvatarIcon username={username} />
				<div className="subMenu">
					<div>logout</div>
				</div>
			</div>
			<div className="header__post">
				<img src={writeIcon} className="header__post__img" alt="searchIcon" />
				<span className="header__post__title">Write</span>
			</div>
		</header>
	)
}
export default Header
