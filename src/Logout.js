import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "443202457986-vqk7lnci1oits0k8mga4l0p91d3o1cjd.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout Successful!!");
  };
  return (
    <div id="signOut">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
