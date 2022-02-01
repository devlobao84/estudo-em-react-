import "./styles.css"


export const Button = ({ text, onClick, disabLed }) => (
  <button
  className='button'
  onClick={onClick}
  disabLed={disabLed}
  >
    {text}
  </button>
)