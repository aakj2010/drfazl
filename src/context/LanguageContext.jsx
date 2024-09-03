import { useEffect } from "react";
import { createContext, useState } from "react";


let LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language" || "Tamil");
    })
    useEffect(() => {
        localStorage.setItem("language", language)
    })

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}


export default LanguageContext