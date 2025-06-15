import { createContext, useState, useEffect } from "react";

let FontContext = createContext();

export const FontSizeProvider = ({ children }) => {
  // Initialize state with font size from localStorage or default to 14
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('fontSize') ? parseInt(localStorage.getItem('fontSize')) : 16;
  });

  // Update localStorage and document font size whenever fontSize changes
  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  return (
    <FontContext.Provider value={{ fontSize, setFontSize, handleFontSizeChange }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContext;
