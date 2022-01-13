import './Button.css'

const Button = ({ name, color }) => (
    <button className={"btn " + (color === 'primary' ? 'btn--primary' : 'btn--secondary')}>{name}</button>
)

export default Button;