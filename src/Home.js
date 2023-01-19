
// import React from 'react'

import React from "react";

// export const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }


// import React from 'react'

function Home() {

  const name = 'ali'; // variable

  const add = () => { // arrow function method tanımı
    alert('eklendi')
  }

  function add2(name) {
    alert(name);
  }

  // function add() { // default function method tanımı
  //   alert('eklendi')
  // }

  // event binding ve model binding yaptık
  // fragment yani jsx dosyasındaki html elementlerini kapsayan fakat doma herhangi bir element yansıtmayan yapı.
  return (
    // <>
    //   {name} adlı arkadaş {5 * 5} puan aldı
    //   <button onClick={add}>Ekle</button>
    //   <button onClick={() => add2('ali')}>Ekle 2</button>
    // </>
    // <React.Fragment style={{backgroundColor:'red'}}>
    //    {name} adlı arkadaş {5 * 5} puan aldı
    //   <button onClick={add}>Ekle</button>
    //   <button onClick={() => add2('ali')}>Ekle 2</button>
    // </React.Fragment>
    <div style={{textAlign:'center'}}>
       {name} adlı arkadaş {5 * 5} puan aldı
      <button onClick={add}>Ekle</button>
      <button onClick={() => add2('ali')}>Ekle 2</button>
    </div>
    
  ) // JSX => HTML
}

export default Home




