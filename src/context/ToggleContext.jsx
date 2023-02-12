import { createContext, useState } from "react";

const ToggleContext = createContext()

export const ToggleProvider = ({ children }) => {
    const [query, setQuery] = useState("")

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <ToggleContext.Provider value={{
            query,
            setQuery,
            open,
            setOpen,
            handleClick
        }}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContext