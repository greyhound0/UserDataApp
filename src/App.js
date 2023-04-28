import React, { useEffect, useState } from "react";
import UserForm from "./components/Modules/UserForm";

import "./App.css";

import { gapi } from "gapi-script";
import Login from "./Login/Login";
import Logout from "./Logout";

const clientId =
  "443202457986-vqk7lnci1oits0k8mga4l0p91d3o1cjd.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: clientId,
        scope: "",
      });
    }
    gapi.load("client:Web Client 1", start);
  });

  return (
    <div className="App">
      <Login />
      <Logout />
      <UserForm />
    </div>
  );
}

export default App;
