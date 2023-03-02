import { createContext, useState } from "react";


let SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {
    const [open, setOpen] = useState(false)

    const showSidebar = () => {
        setOpen(!open)
    }

    return (
        <SideBarContext.Provider value={{open, setOpen, showSidebar}}>
            {children}
        </SideBarContext.Provider>
    )
}

export default SideBarContext