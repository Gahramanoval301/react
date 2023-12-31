import { createContext, useState } from "react";

export const AuthContext = createContext({})

const AuthContextProvider = ({ children }) => {
    const [name, setName] = useState('leman')

    
    return (
        <AuthContext.Provider value={[name, setName]}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider