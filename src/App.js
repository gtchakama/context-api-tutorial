import UserContextProvider from "./Context/UserContext";
import Profile from "./Components/Profile";
function App() {
  return (
    <UserContextProvider>
      <Profile />
    </UserContextProvider>
  );
}

export default App;
