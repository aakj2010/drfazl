import { useEffect, useState } from "react";
import { createContext } from "react";


let FontContext = createContext()


export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(16);
    // const [save, setSave] = useState(16)
    // const handleSave = () => {
    //     setSave(fontSize)
    // }
    useEffect(() => {
        const savedFontSize = parseInt(localStorage.getItem('fontSize'));
        if (savedFontSize) {
          setFontSize(savedFontSize);
        }
      }, []);
    
      const handleFontSizeChange = (size) => {
        setFontSize(size);
      };
    
      const handleSaveClick = () => {
        localStorage.setItem('fontSize', fontSize);
        document.documentElement.style.fontSize = `${fontSize}px`;
      };

    return (
        <FontContext.Provider value={{ fontSize, setFontSize, handleSaveClick, handleFontSizeChange  }}>
            {children}
        </FontContext.Provider>
    )
}



export default FontContext