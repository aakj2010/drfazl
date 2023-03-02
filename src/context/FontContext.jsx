import { useState } from "react";
import { createContext } from "react";


let FontContext = createContext()


export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(16);
    const [save, setSave] = useState(16)
    const handleSave = () => {
        setSave(fontSize)
    }

    return (
        <FontContext.Provider value={{ fontSize, setFontSize, save, handleSave }}>
            {children}
        </FontContext.Provider>
    )
}



export default FontContext