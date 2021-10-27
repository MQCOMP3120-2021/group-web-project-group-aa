import React, { Component } from 'react'
import isEmpty from 'lodash/isEmpty'
import tabSwitchData from '../tool/tabSwitchData'
import Nothing from '../component/notFound'
import Header from '../component/Header'
import TabSwitch from '../component/tabSwitch/tabSwitch'
import BookCard from '../component/BookCard'
import CustomModal from '../component/Modal'
import MarkDownEditor from '../component/MarkDownEditor'
import { getBooks } from '../http/homepageHttp'
import { Mycontext } from '../context'
import '../style/page/homepage.scss'
import { findBookByTitle, bookLiked, addBook } from '../http/booksPageHttp'
import '../style/component/customModal.scss'

export default class HomePage extends Component {
	static contextType = Mycontext
	constructor(props) {
		super(props)
		this.state = {
			allbookData: [],
			favoritebookData: [],
			isOpenWriting: false,
			isSubmitting: false
		}
	}

	searchHandle = async searchText => {
		const { data } = await findBookByTitle(searchText)
		this.setState({
			allbookData: data
		})
	}

	writingModalHandle = () => {
		this.setState({
			isOpenWriting: !this.state.isOpenWriting
		})
	}
	submitNewBooks = async (title, content) => {
		this.setState({
			isSubmitting: true
		})
		const { userId } = this.context.user
		const author = userId
		const { data } = await addBook({ title, content, author })
		this.setState({
			isSubmitting: false,
			isOpenWriting: false,
			allbookData: data
		})
	}

	async componentDidMount() {
		const { userId } = this.context.user
		const allBooks = await getBooks()
		const favoriteBooks = await bookLiked(userId)
		this.setState({
			allbookData: allBooks.data,
			favoritebookData: favoriteBooks.data
		})
	}

	render() {
		const { logout } = this.context
		const { searchHandle, writingModalHandle, submitNewBooks } = this
		const { allbookData, favoritebookData, isOpenWriting, isSubmitting } =
			this.state

		return (
			<div className="homepage">
				<Header
					logout={logout}
					searchBarClass="headerSearch"
					search={e => searchHandle(e)}
					username="F"
					openWrittingModal={writingModalHandle}
				/>
				<div className="homepage__body">
					<TabSwitch tabOptions={tabSwitchData} switchTab={() => null}>
						<section>
							{isEmpty(allbookData) ? (
								<Nothing />
							) : (
								<BookCard bookData={allbookData} />
							)}
						</section>
						<section>
							{isEmpty(favoritebookData) ? (
								<Nothing />
							) : (
								<BookCard bookData={favoritebookData} />
							)}
						</section>
					</TabSwitch>
				</div>
				<CustomModal
					isOpen={isOpenWriting}
					closeModal={writingModalHandle}
					protalClassname="writtingModal"
				>
					<MarkDownEditor
						submitNewBooks={submitNewBooks}
						isSubmitting={isSubmitting}
					/>
				</CustomModal>
			</div>
		)
	}
}
