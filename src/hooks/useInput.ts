import React, { useState } from 'react';

const useInput = <T>(initialInput: T) => {
  const [input, setInput] = useState(initialInput);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const reset = () => {
    setInput(initialInput);
  };

  return [input, handleInputChange, reset];
};

export default useInput;
