import React from 'react'
import "../Css/Btn.css"
const Btn = (props) => {
    const {text,className,style,icon, onClick} = props
  return (
    <button  onClick={onClick} style={style} className={`Btn ${className || ""}`}>{text}{icon}</button>
  )
}

export default Btn
