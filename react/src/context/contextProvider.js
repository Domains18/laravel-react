import { createContext, useContext, useState} from "react";
import React from "react";
const StateContext = React.createContext({
    currentUser: null,
    token: null,
    setCurrentUser: () => { },
    setToken: () => { },
}); 


// Path: react/src/context/contextProvider.js

export const ContextProvider = ({ children }) => {
    const [currentUser, setUser] = useState({
        name: "John Doe",
    });
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken = (token) => {
        _setToken(token)

        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token)
        }
        else {
            localStorage.removeItem("ACCESS_TOKEN")
        }
    }
    return (
        <StateContext.Provider value={{ currentUser, setUser, token, setToken }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);


// Path: react/src/context/contextProvider.js
