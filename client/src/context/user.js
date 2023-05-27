import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        fetch('/me')
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    setUser(user);
                    setLoggedIn(true);
                })
            } else {
                setLoading(false)
            }   
        })
    },[])

    const signup = (user) => {
        setUser(user);
        setLoggedIn(true);
    }

    const login = (user) => {
        setUser(user);
        setLoggedIn(true);
        // fetchDealers();
    }

    const logout = () => {
        setUser({});
        setLoggedIn(false);
        // setDealers([]);
    }

    return (
        <UserContext.Provider value={{ user, loading, loggedIn, logout, login, signup }}>
            {children}
        </UserContext.Provider>
    ); 
}

export { UserContext, UserProvider };