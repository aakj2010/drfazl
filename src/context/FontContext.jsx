import { useContext, useState } from "react";
import { createContext } from "react";
// import LanguageContext from "./LanguageContext";
import { useEffect } from "react";


let FontContext = createContext()


export const FontSizeProvider = ({ children }) => {
  // const tamil = useContext(LanguageContext);

  const [fontSize, setFontSize] = useState(14);
  // const [save, setSave] = useState(16)
  // const handleSave = () => {
  //     setSave(fontSize)
  // }

  // useEffect(() => {
  //     const savedFontSize = parseInt(localStorage.getItem('fontSize'));
  //     if (savedFontSize) {
  //       setFontSize(savedFontSize);
  //     }
  //   }, []);
  const handleFontSizeChange = (size) => {
    setFontSize(size);
  }
  useEffect(() => {

  }, [fontSize,setFontSize])

  const handleSaveClick = () => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.style.fontSize = `${fontSize}px`;
  };

  return (
    <FontContext.Provider value={{ fontSize, setFontSize, handleSaveClick, handleFontSizeChange }}>
      {children}
    </FontContext.Provider>
  )
}



export default FontContext