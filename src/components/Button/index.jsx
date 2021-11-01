import "./styles.css"

import { Component } from "react/cjs/react.production.min";

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return <button     
     className= "buttonOnClick"
     onClick={onClick}
     disabled={disabled}

     >
     {text}
    </button>;
  }
}
