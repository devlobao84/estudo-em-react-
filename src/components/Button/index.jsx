import "./styles.css"


export const Button = ({ text, onClick, disabled }) => (
  <button
  className='button'
  onClick={onClick}
  disabLed={disabled}
  >
    {text}
  </button>
)