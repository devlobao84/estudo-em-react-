import './styles.css'

export const TextInput = ({ searchValue, handleChange  }) => {
  return<div className="inputsearch">
   <input
    className="input"
    onChange={handleChange}
    value={searchValue} 
    type="search"
    placeholder="Type yout search"
     />
  </div>
};
