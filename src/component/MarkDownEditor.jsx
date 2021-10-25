import React, { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs'
import '../style/component/markDownEditor.scss'
import 'quill/dist/quill.snow.css'
const MarkDownEditor = props => {
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
		<>
			<section className="editor">
				<input type="text" placeholder="title" className="editor__title" />
				<button onClick={() => submitNewBooks(content)}>submit</button>
				<div ref={quillRef} className="editor__content" />
			</section>
		</>
	)
}
export default MarkDownEditor
