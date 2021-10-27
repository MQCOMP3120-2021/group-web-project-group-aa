import React from 'react'
import bookImg from '../asset/bookImg.jpg'
import '../style/component/bookCard.scss'
import likesIcon from '../asset//Likes.svg'
import commentIcon from '../asset/comment.svg'
import { Link } from 'react-router-dom'

const BookCard = props => {
	const { bookData = [] } = props
	return (
		<section className="bookCard">
			{bookData.map(item => {
				const title = item.title
				const content = item.content.replace(/<[^>]+>/g, '')
				const likesAtm = item.like.length
				const commentAtm = item.comments.length
				return (
					<Link
						key={item.id}
						className="bookCard__item"
						to={`/bookDetail/${item.id}`}
					>
						<div className="bookCard__item__detail">
							<h4 className="bookCard__item__title">{title}</h4>
							<p className="bookCard__item__article">{content}</p>
							<div className="bookCard__item__activity">
								<div className="bookCard__item__iconContainer">
									<div className="bookCard__item__icon">
										<img src={likesIcon} alt="likesIcon" />
									</div>
									<span>{likesAtm}</span>
								</div>
								<div className="bookCard__item__iconContainer">
									<div className="bookCard__item__icon">
										<img src={commentIcon} alt="commentIcon" />
									</div>
									<span>{commentAtm}</span>
								</div>
							</div>
						</div>
						<div className="bookCard__item__img">
							<img src={bookImg} alt="book background"></img>
						</div>
					</Link>
				)
			})}
		</section>
	)
}
export default BookCard
