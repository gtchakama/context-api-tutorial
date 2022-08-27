import { useState, createContext } from "react";

export const UserContext = createContext();

//auth provider
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "George Chakama",
    email: "george.chakama@gmail.com",
    address: "Harare Zimbabwe",
  });
  const greeting = (arg) => {
    console.log(arg);
  };

  const contextData = {
    user,
    setUser,
    greeting,
  };
  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
