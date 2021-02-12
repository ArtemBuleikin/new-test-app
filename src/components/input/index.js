import './style.scss'

export default function Input({type, onChange, value}) {
	return(
		<input className="input" type={type ? type : 'text'} onChange={onChange} value={value}/>
	)
}