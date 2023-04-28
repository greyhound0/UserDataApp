import React from "react";
import GoogleLogin from "react-google-login";

const clientId =
  "443202457986-vqk7lnci1oits0k8mga4l0p91d3o1cjd.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS!! Current User ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED!! res:", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
