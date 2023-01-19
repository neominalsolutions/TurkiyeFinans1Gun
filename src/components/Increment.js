import React, { useState } from 'react' // hook

function Counter() {

  console.log('counter');
   // her bir state değişiminde component render olduğu için

  // Component localinde eğer bir eylem sonucu componment içerisindeki modelde bir değişim söz konusu olucak ise bu durumda state kullanıyoruz.
  // getter, setter 
  // bir component içerisinde istediğimiz kadar state tanımı yapılabilir.
  let [counter, setCounter] = useState(0); // initial değer verdik
  // virtual dom mekanizması için state önemli
  // react de state kullanarak two way binding yapıyoruz
 

  // let counter2 = 0;

  // counter++; yanlış bir yöntem react state değişikliği için set methodunu kullanımına izin verir.
  const increase = () => {
    // state değişimi için set kullandık
    // const value = counter + 1;
    //setCounter(value); // counter arttılmış değerini counter state'e güncelle
    setCounter(++counter);
    // counter2++;
    // console.log('counter2', counter2);
  }

  const decrease = () => {
    // virtual dom state her bir değişiminde aşağıdaki jsx dosyasını render eder.

    const value = counter - 1;

    if(value >=0 ) {
      setCounter(--counter);
    } else {
      alert('değer 0 dan küçük olamaz')
    }

  }

  const reset = () => {
    setCounter(0);
  }

  // render işlemi function componentlerde return ile oluyor.
  return (
    <div>
      <button onClick={increase}> (+) </button>
      <button onClick={decrease}>(-)</button>
      <button onClick={reset}>Reset (0)</button>
      <label>L1: {counter}</label>
      {/* <label>L2:{counter2}</label> */}
    </div>
  )
}

export default Counter