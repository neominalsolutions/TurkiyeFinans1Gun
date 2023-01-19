import React from 'react'

// constructor'a props yazmak
// 1. yöntem
function Button(props) {

  const {bgColor, text, textColor} = props; // read-only değerler
  // component init olurken alınan ve render edilme sürecine dahil edilen değerler.

  return (
    <>
    <button style={{backgroundColor:bgColor,color:textColor}}>{text}</button>
    </>
  )
}

export default Button