import React, { useState } from "react";

function useInput(initialText: string) {
  const [text, setText] = useState(initialText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const resetText = (): void => {
    setText("");
  };
//다보내고 나면 비우기!!
  return { text, handleChange, resetText };
}

export default useInput;
