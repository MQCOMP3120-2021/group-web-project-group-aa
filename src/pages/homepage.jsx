import React, { Component } from 'react'
import tabSwitchData from '../tool/tabSwitchData'
import Header from '../component/Header'
import TabSwitch from '../component/tabSwitch/tabSwitch'
import BookCard from '../component/BookCard'
import CustomModal from '../component/Modal'
import MarkDownEditor from '../component/MarkDownEditor'
import bookImg from '../asset/book.jpeg'
import '../style/page/homepage.scss'
import '../style/component/customModal.scss'

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
			],
			isOpenWriting: false
		}
	}

	searchHandle = searchText => {
		console.log(searchText)
	}
	writingModalHandle = () => {
		this.setState({
			isOpenWriting: !this.state.isOpenWriting
		})
	}
	submitNewBooks = e => {
		console.log(e)
	}
	componentDidMount() {}
	render() {
		const { searchHandle, writingModalHandle, submitNewBooks } = this
		const { allbookData, mybookData, isOpenWriting } = this.state
		return (
			<div className="homepage">
				<Header
					searchBarClass="headerSearch"
					search={e => searchHandle(e)}
					username="F"
					openWrittingModal={writingModalHandle}
				/>
				<div className="homepage__body">
					<TabSwitch tabOptions={tabSwitchData} switchTab={() => null}>
						<BookCard bookData={allbookData} />
						<BookCard bookData={mybookData} />
					</TabSwitch>
					<div className="homepage__body__right">
						{/* <img src={bookImg} alt="reading" /> */}
					</div>
				</div>
				<CustomModal
					isOpen={isOpenWriting}
					closeModal={writingModalHandle}
					protalClassname="writtingModal"
				>
					<MarkDownEditor submitNewBooks={submitNewBooks} />
				</CustomModal>
			</div>
		)
	}
}
