import React from 'react'

const UserContext = React.createContext();
const ThemeContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { UserProvider, UserConsumer, ThemeProvider, ThemeConsumer, ThemeContext }
export default UserContext;

