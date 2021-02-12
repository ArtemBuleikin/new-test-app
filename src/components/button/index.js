import './style.scss'

export default function Button({children, onClick}) {
	return(
		<button onClick={onClick ? onClick : null} className="btn">{children}</button>
	)
}