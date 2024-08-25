import { createContext, useState } from "react";


let ActiveTabContext = createContext()

export const ActiveTabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);
    // console.log("context : ", activeTab)
    return (
        <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </ActiveTabContext.Provider>
    )
}

export default ActiveTabContext