import React, { useEffect, useState, useContext } from 'react'
import { Mycontext } from '../context/index'
import { useParams } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import Loading from '../component/Loading'
import { selectedBook, addLike, addComment } from '../http/booksPageHttp'

import likesIcon from '../asset/givealike.svg?inline'
import '../style/page/bookDetailpage.scss'

function App() {
	const context = useContext(Mycontext)
	const { userId } = context.user
	const [book, setBook] = useState([])
	const [isLike, setIsLike] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [commentText, setCommentText] = useState('')
	const { title, comments, like = [], content } = book
	const likesAtm = like.length
	const { id } = useParams()

	useEffect(() => {
		const fetchBook = async () => {
			const { data } = await selectedBook(id)
			setIsLike(data.like.includes(userId))
			setBook(data)
		}
		fetchBook()
	}, [])

	const likesHandle = async () => {
		const { data } = await addLike({ id, userId })
		const { likeStatus, newdata } = data
		setBook(newdata[0])
		setIsLike(likeStatus)
	}
	const commentHandle = async () => {
		setIsLoading(true)
		const { data } = await addComment({ id, commentText, userId })
		setBook(data)
		setIsLoading(false)
		setCommentText('')
	}

	return (
		<main className="detailPage">
			<div className="detailPage__body">
				<aside className="detailPage__action">
					<div
						className={`detailPage__like detailPage__like--${isLike}`}
						onClick={() => likesHandle()}
					>
						<img src={likesIcon} alt="likes" />
						<span>{likesAtm}</span>
					</div>
				</aside>
				<section className="detailPage__article">
					<h1>{title}</h1>
					<div dangerouslySetInnerHTML={{ __html: content }}></div>
				</section>
			</div>

			<section className="detailPage__comment">
				<div className="detailPage__textarea">
					<textarea
						rows={6}
						placeholder="comment here...."
						onChange={e => setCommentText(e.target.value)}
						value={commentText}
					/>
					<div className="detailPage__submit">
						<button
							onClick={() => commentHandle()}
							disabled={isEmpty(commentText)}
						>
							{isLoading ? <Loading /> : 'submit'}
						</button>
					</div>
				</div>
				<section className="detailPage__commentContainer">
					<h3>Comment</h3>
					{comments &&
						comments.map((comment, index) => {
							const { comments } = comment
							return (
								<div className="detailPage__commentList" key={index}>
									<span>author:</span>
									<p>{comments}</p>
								</div>
							)
						})}
				</section>
			</section>
		</main>
	)
}

export default App
