import { Mycontext } from './index'

const Provider = props => {
	const { children } = props
	return <Mycontext.Provider value={{ ok: 123 }}>{children}</Mycontext.Provider>
}

export default Provider
