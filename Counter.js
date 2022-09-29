import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    // arttırma fonksiyonu
    setCount(count + 1);
  };

  const decrease = () => {
    // azaltma fonksiyonu shorf if kullanılarak yapıldı. eğer  count negatife inmiyorsa  countu 1 azalt iniyorsa alert çıkart
    count >= 1 ? setCount(count - 1) : alert("Azaltma Yapamazsın");
  };

  const reset = () => {
    // reset fonksiyonu
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
