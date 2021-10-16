import React, { Component } from 'react'
import tabSwitchData from '../tool/tabSwitchData'
import Header from '../component/Header'
import TabSwitch from '../component/tabSwitch/tabSwitch'
import BookCard from '../component/BookCard'
import bookImg from '../asset/book.jpeg'
import '../style/page/homepage.scss'

export default class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allbookData: [
				{ id: 1, title: 'apple', content: 'this book is all about xxx' },
				{ id: 2, title: 'apple', content: 'this book is all about xxx' },
				{ id: 3, title: 'apple', content: 'this book is all about xxx' }
			],
			mybookData: [
				{ id: 1, title: 'pineapple', content: 'okok' },
				{ id: 2, title: 'pineapple', content: 'okok' }
			]
		}
	}

	searchHandle = searchText => {
		console.log(searchText)
	}

	componentDidMount() {}
	render() {
		const { searchHandle } = this
		const { allbookData, mybookData } = this.state
		return (
			<div className="homepage">
				<Header
					searchBarClass="headerSearch"
					search={e => searchHandle(e)}
					username="F"
				/>
				<div className="homepage__body">
					<TabSwitch tabOptions={tabSwitchData}>
						<BookCard bookData={allbookData} />
						<BookCard bookData={mybookData} />
					</TabSwitch>
					<div className="homepage__body__right">
						{/* <img src={bookImg} alt="reading" /> */}
					</div>
				</div>
			</div>
		)
	}
}
