import React from 'react'
import nothimgImg from '../asset/nothing.svg'
import '../style/component/nothing.scss'
const Nothing = () => {
	return (
		<section className={'nothing'}>
			<figcaption>
				<img src={nothimgImg} alt="nothing" />
			</figcaption>
		</section>
	)
}
export default Nothing
