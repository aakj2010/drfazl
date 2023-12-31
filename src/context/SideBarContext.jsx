import { createContext, useState } from "react";


let SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);


    const toggleSidebar  = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <SideBarContext.Provider value={{sidebarOpen, setSidebarOpen, toggleSidebar }}>
            {children}
        </SideBarContext.Provider>
    )
}

export default SideBarContext