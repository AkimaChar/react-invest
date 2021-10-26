import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

export default function AuthLayout({
  location,
  creds,
  handleChange,
  handleSubmit,
  loading,
}) {
  return (
    <>
      <header className="header wrap_container">
        <hr />
        <h1>{location === "signin" ? "Login" : "Registration"}</h1>
        <hr />
      </header>
      <div className="wrap_container form_container auth_container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <form className="form-body" onSubmit={handleSubmit}>
              <div className="input_container">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={creds?.name || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="input_container">
                <label htmlFor="password">Password </label>
                <input
                  type="password"
                  name="password"
                  value={creds?.password || ""}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="sign-in_button" type="sumbit">
                  {location === "signin" ? "Login" : "Registration"}
                </button>
              </div>
            </form>
            <div className="sign-up_container">
              <span>
                {location === "signin"
                  ? "Not registered yet?"
                  : "Already have an account?"}
              </span>
              <Link to={location === "signin" ? "/signup" : "/signin"}>
                {location === "signin" ? "Registration" : "Login"}
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
