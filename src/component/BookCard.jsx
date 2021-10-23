import React from 'react'
import bookImg from '../asset/bookImg.jpg'
import '../style/component/bookCard.scss'
import {Link} from "react-router-dom";

const BookCard = props => {
	const { bookData = [] } = props
	return (
		<section className="bookCard">
			{bookData.map(item => {
				return (
					<Link key={item.id} className="bookCard__item" to={`/bookDetail/${item.id}`}>
						<div className="bookCard__item__detail">
							<h4>{item.title}</h4>
							<p>{item.content}</p>
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
