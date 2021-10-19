import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/page/homepage.scss'
import '../style/component/customModal.scss'
import Header from "../component/Header";
import TabSwitch from "../component/tabSwitch/tabSwitch";
import tabSwitchData from "../tool/tabSwitchData";
import BookCard from "../component/BookCard";
import CustomModal from "../component/Modal";
import MarkDownEditor from "../component/MarkDownEditor";

function App() {
	const [book, setBook] = useState({})
	const [isOpenWriting, setIsOpenWriting] = useState(false)

	const getBook = () => {
		axios.get('http://localhost:3001/api/books/616533612240667588972728').then(response => {
			setBook(response.data)
		})
	}

	useEffect(getBook, [])

	const addLike = book => () => {
		axios
			.put('http://localhost:3001/api/books/' + book.id, {
				name: book.name,
				comment: book.comment,
				like: book.like + 1
			})
			.then(response => {
				getBook()
			})
	}

	const searchHandle = searchText => {
		console.log(searchText)
	}

	const writingModalHandle = () => {
		 setIsOpenWriting(isOpenWriting)
	}

	const submitNewBooks = e => {
		console.log(e)
	}

	return (
		<div className="homepage">
			<Header
				searchBarClass="headerSearch"
				search={e => searchHandle(e)}
				username="F"
				openWrittingModal={writingModalHandle}
			/>
			<div className="homepage__body">
				<div className="inner-container">
					<h2 className="book-title">{book.title}</h2>
					<div className="content">{book.content}</div>
					<h4 className="comments">Comments</h4>
					{
						book.comments.map((comment, i) => <div className="comment-item">
							<div className="comment-number">#{i+1}</div>
							<div className="comment-content">{comment}</div>
						</div>)
					}
					<div>{book.like}</div>
					<button onClick={addLike(book)}>like this book</button>
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

export default App
