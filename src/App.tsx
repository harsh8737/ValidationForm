import React, { useState } from "react";
import LoginForm from "./Components/LoginForm";
import SignUpForm from "./Components/SignUpForm";

const App: React.FC = () => {
  const [activeForm, setActiveForm] = useState<"login" | "signup">("login");

  return (
    <div className="app">
      <div className="form-toggle">
        <button onClick={() => setActiveForm("login")}>Login</button>
        <button onClick={() => setActiveForm("signup")}>Sign Up</button>
      </div>
      {activeForm === "login" ? <LoginForm /> : <SignUpForm />}
    </div>
  );
};

export default App;