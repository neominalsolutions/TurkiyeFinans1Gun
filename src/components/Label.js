import React from 'react'
import PropTypes from 'prop-types';

// type LabelProps {
//   text:string,
//   fontSize:number
// }


// ikinci yöntem proplar açık açık yazılırlar
const Label = ({text,fontSize}) => {
  return (
    <div style={{fontSize:`${fontSize}px`}}>{text}</div>
  )
}

// Property tip tanımlamasını propTypes olarak yapabiliriz
// type check
Label.propTypes = {
  text:PropTypes.string,
  fontSize:PropTypes.number
}

// Propertyler boş geçildiğinde default olarak componente geçecek değerler
Label.defaultProps = {
  text: "label11",
  fontSize: 16,
}


export default Label
