import { useState } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(prev => !prev);
  };

  const open = () => {
    setValue(true);
  };

  const close = () => {
    setValue(false);
  };

  return {
    value,
    open,
    close,
    toggle,
  };
}
