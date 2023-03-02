import React from 'react';
import { createContext, useState, useContext } from 'react';

const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});



// Path: react/src/context/contextProvider.js

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "John Doe",
    });
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken = (token) => {
        _setToken(token)
        // token? localStorage.setItem('ACCESS_TOKEN', token) : localStorage.removeItem("ACCES_TOKEN")
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token)
        }
        else {
            localStorage.removeItem("ACCES_TOKEN")
        }
    }
    return (
        <stateContext.Provider value={{ user, token, setUser, setToken }}>
            {children}
        </stateContext.Provider>
    )
}


// Path: react/src/context/contextProvider.js
export const useStateContext = () => {
    return useContext(stateContext)
}
