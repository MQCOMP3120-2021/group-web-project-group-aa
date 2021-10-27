import React, { useEffect, useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useQuill } from 'react-quilljs'
import Loading from './Loading'
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
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const { submitNewBooks, isSubmitting } = props
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
				<div className="editor__action">
					<input
						type="text"
						placeholder="title"
						className="editor__title"
						onChange={e => {
							setTitle(e.target.value)
						}}
					/>
					<button
						onClick={() => submitNewBooks(title, content)}
						disabled={isEmpty(content) || isEmpty(title)}
					>
						{isSubmitting ? <Loading /> : 'submit'}
					</button>
				</div>
				<div ref={quillRef} className="editor__content" />
			</section>
		</>
	)
}
export default MarkDownEditor
