import React from "react";

// 1. Create context
// default value if no value was provide on UserProvider in parent component
const UserContext = React.createContext("This is the default value");

// 2. initialize provider and consumer
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

// Export userProvider and userConsumer
export { UserProvider, UserConsumer };
export default UserContext;
