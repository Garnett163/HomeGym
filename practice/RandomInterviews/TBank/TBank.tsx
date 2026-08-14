import React, { useEffect, useState, useRef } from 'react';

export default function TBank() {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const shouldFocusRef = useRef(false);

  function showAndFocusInput() {
    setIsVisible(true);
    // inputRef.current?.focus();
    // shouldFocusRef.current = true;
  }

  // решение
  // useEffect(() => {
  //   if (isVisible) {
  //     inputRef.current?.focus();
  //   }
  // }, [isVisible]);

  // альтернативное решение
  // function setInputRef(node: HTMLInputElement | null) {
  //   if (node && shouldFocusRef.current) {
  //     node.focus();
  //     shouldFocusRef.current = false;
  //   }
  // }

  return (
    <div>
      <button onClick={showAndFocusInput}>show and focus input</button>
      {isVisible && <input ref={inputRef} type="text" />}
    </div>
  );
}
