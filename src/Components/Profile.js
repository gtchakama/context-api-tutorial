import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Profile() {
  const { user, greeting } = useContext(UserContext);
  return (
    <div>
      <h1>My Profile</h1>
      <h2>Name : {user.name}</h2>
      <h2>Email : {user.email}</h2>
      <button
        style={{ padding: "4px 8px" }}
        onClick={() => greeting("Random User")}
      >
        Hi
      </button>
    </div>
  );
}

export default Profile;
