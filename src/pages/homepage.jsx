import React, { Component } from 'react'
import tabSwitchData from '../tool/tabSwitchData'
import Header from '../component/Header'
import TabSwitch from '../component/tabSwitch/tabSwitch'
import BookCard from '../component/BookCard'
import CustomModal from '../component/Modal'
import MarkDownEditor from '../component/MarkDownEditor'
import { getBooks } from '../http/homepageHttp'
import { Mycontext } from '../context'
import '../style/page/homepage.scss'
import '../style/component/customModal.scss'

export default class HomePage extends Component {
	static contextType = Mycontext
	constructor(props) {
		super(props)
		this.state = {
			allbookData: [],
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
	async componentDidMount() {
		const { data } = await getBooks()
		this.setState({
			allbookData: data
		})
	}

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
