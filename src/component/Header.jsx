import React from 'react'
import SearchBar from './SeachBar'
import AvatarIcon from './Avatar.jsx'
import writeIcon from '../asset/write.svg'
import LogoIcon from '../asset/logo.svg'
import '../style/component/header.scss'
import { Link } from 'react-router-dom'

const Header = props => {
	const {
		searchBarClass,
		search,
		placeholder,
		username,
		openWrittingModal,
		logout
	} = props

	return (
		<header className="header">
			<Link to="/homepage" className="header__icon">
				<img src={LogoIcon} alt="logo" />
			</Link>
			<div className="header__action">
				<div className="header__search">
					<SearchBar
						search={search}
						placeholder={placeholder}
						searchBarClass={searchBarClass}
					/>
				</div>

				<div className="header__user">
					<AvatarIcon username={username} className={'menu'} />
					<ul className="subMenu">
						<li onClick={logout}>Logout</li>
					</ul>
				</div>

				<div className="header__post" onClick={openWrittingModal}>
					<img src={writeIcon} className="header__post__img" alt="searchIcon" />
					<span className="header__post__title">Write</span>
				</div>
			</div>
		</header>
	)
}
export default Header
