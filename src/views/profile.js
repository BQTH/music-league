import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

//Get auth0 user info
const Profile = () => {
  const { user } = useAuth0();
  const { name, email } = user;

  return (
    <div>
        <div>
        </div>
        <div>
          {/*Display user information*/}
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
  );
};

export default Profile;