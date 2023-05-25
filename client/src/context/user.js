import React from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
    // const [loading, setLoading] = useState(true);

    // setLoading(false); 

    return (
        <UserContext.Provider value={{ }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };

