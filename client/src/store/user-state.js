import React from 'react';

const userData = React.createContext({
    isAuthenticated: false,
    user: {
        name: "",
        email: "",
        _id: "",
        password: "",
        __v: ""
    },
    onLogin: () => {},
    onLogout: () => {}
});

export default userData;