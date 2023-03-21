import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
});


export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, _setToken] = useState(null);
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCES_TOKEN', token);
        } else {
            localStorage.removeItem('ACCES_TOKEN');
        }
    }
    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateValue = () => useContext(StateContext);
