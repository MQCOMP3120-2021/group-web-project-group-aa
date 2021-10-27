import axios from 'axios'
const instance = axios.create({})

export const findBookByTitle = Titletext => {
	return instance.get(`/api/books/${Titletext}`)
}

export const bookLiked = userId => {
	return instance.get(`/api/books/user/${userId}`)
}

export const addBook = bookDetail => {
	return instance({
		method: 'POST',
		url: '/api/books',
		data: {
			...bookDetail
		}
	})
}

export const selectedBook = id => {
	return instance.get(`/api/books/id/${id}`)
}

export const addLike = infor => {
	const { id, userId } = infor
	return instance.put(`/api/books/${id}/${userId}`)
}

export const addComment = infor => {
	return instance({
		url: '/api/books/comment',
		method: 'POST',
		data: {
			...infor
		}
	})
}
