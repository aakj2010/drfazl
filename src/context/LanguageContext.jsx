import { createContext, useState } from "react";


let LanguageContext = createContext()

export const LanguagePovider = ({ children }) => {
    const [language, setLanguage] = useState("English")

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}


export default LanguageContext