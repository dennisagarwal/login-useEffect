import React, {useRef, useEffect, useImperativeHandle} from 'react'
import classes from './Input.module.css'


function Input(props) {
const inputRef = useRef();

const activate = () => {
  inputRef.current.focus();
}
// useEffect(()=>{
//   inputRef.current.focus();
// const inputRef = useRef();
// }, []);

  return ( <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
    ref={inputRef}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
  )
}

export default Input