import React from 'react'
import Modal from 'react-modal'
import '../style/component/customModal.scss'

const CustomModal = props => {
	const { children, isOpen, closeModal, protalClassname } = props
	return (
		<Modal
			isOpen={isOpen}
			ariaHideApp={false}
			onRequestClose={closeModal}
			portalClassName={protalClassname}
			className={`modal Modal--${protalClassname}`}
			overlayClassName={`overlay Overlay--${protalClassname}`}
		>
			{children}
		</Modal>
	)
}

export default CustomModal
