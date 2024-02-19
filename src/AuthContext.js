import React, { Children } from "react";

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
    return <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
}