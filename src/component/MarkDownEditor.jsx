import React, { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs'
import '../style/component/markDownEditor.scss'
import 'quill/dist/quill.snow.css'
const MarkDownEditor = props => {

	let initialState = props
	if (!initialState) {
		initialState = {_id: '', title: '', author: '', content: '', like: 0, comment: []}
	}
	
	const [formInfo, setFormInfo] = useState(initialState)
	
	const updateField = (event) => {
		// which input element is this
		const name = event.target.attributes.name.value
		console.log(name, event.target.value)
		if (name === "title") {
			setFormInfo({...formInfo, title: event.target.value})
		} else if (name === "author") {
			setFormInfo({...formInfo, author: event.target.value})
		} else if (name === "content") {
			setFormInfo({...formInfo, content: event.target.content})
		} 
	}
	
	/*const formHandler = (event) => {
		event.preventDefault()
		console.log("Form submitted: ", formInfo)
		updateFn(formInfo)
		setFormInfo(initialState)
	}*/



	const theme = 'snow'
	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			[{ align: [] }],

			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ indent: '-1' }, { indent: '+1' }],

			[{ size: ['small', false, 'large', 'huge'] }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			['link', 'image', 'video'],
			[{ color: [] }, { background: [] }],

			['clean']
		]
	}
	const { quill, quillRef } = useQuill({ theme, modules })

	const [content, setContent] = useState('')
	const { submitNewBooks } = props

	useEffect(() => {
		if (quill) {
			quill.on('text-change', () => {
				setContent(quill.root.innerHTML)
			})
		}
	}, [quill])

	return (
			<section className="editor">
				<form>
				<input type="text" placeholder="title" className="editor__title" onChange={updateField} value={formInfo.title}/><br></br>
				
				<input type="text" placeholder="author" className="editor__author" onChange={updateField} value={formInfo.author}/>

				<input className="editor__submit" onClick={() => submitNewBooks(content)} type="submit">submit</input><br></br>
				
				<div ref={quillRef} className="editor__content" onChange={updateField} value={formInfo.content}/>
				</form>
			</section>
	)
}
export default MarkDownEditor