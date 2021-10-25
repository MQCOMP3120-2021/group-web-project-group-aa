import axios from 'axios'

const instance = axios.create({})

export const getBooks = () => {
	return instance.get('/api/books')
}
