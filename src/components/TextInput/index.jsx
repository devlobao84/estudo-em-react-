import './styles.css'

export const TextInput = ({ searchValue, handleChange  }) => {
  return<div className="inputsearch">
   <input className="input" onChange={handleChange} value={searchValue} type="search" />
  </div>
};
