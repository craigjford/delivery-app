import React, { useState } from 'react';

const MyContext = React.createContext();

const MyProvider = (props) => {
    const [user, setUser] = useState({
        name: "craig",
        age: 63,
        lang: "React"
    });

    // useEffect(() => {

    // }, []);

    const getOlder = () => {
        const newAge = user.age + 1
        setUser({...user, age: newAge});
    }

    const toggleName = () => {
        const name = user.name === "craig" ? "ann" : "craig";
        setUser({...user, name: name})
    }

    return (
        <MyContext.Provider  value={{
            user: user,
            toggleName: toggleName,
            getOlder: getOlder
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer } 