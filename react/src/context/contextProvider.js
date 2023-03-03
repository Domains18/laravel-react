import { createContext, useContext } from "react";
const StateContext = React.createContext({
    currentUser: null,
    token: null,
}); 


// Path: react/src/context/contextProvider.js

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("AccessToken"));

    const setToken = (token) => {
        _setToken(token)

        if (token) {
            localStorage.setItem("AccessToken", token)
        }
        else {
            localStorage.removeItem("AccessToken")
        }
    }
    return (
        <StateContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);


// Path: react/src/context/contextProvider.js
