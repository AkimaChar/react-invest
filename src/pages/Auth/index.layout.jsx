import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import { Container } from "../../index.styled";
import * as A from "./index.styled";

export default function AuthLayout({
  location,
  creds,
  handleChange,
  handleSubmit,
  loading,
}) {
  return (
    <Container>
      <Title mb={30}>{location === "signin" ? "Login" : "Registration"}</Title>
      <A.Container>
        {loading ? (
          <Loader />
        ) : (
          <>
            <A.Form onSubmit={handleSubmit}>
              <A.InputContainer>
                <A.Label htmlFor="name">Name</A.Label>
                <A.Input
                  type="text"
                  name="name"
                  value={creds?.name || ""}
                  onChange={handleChange}
                />
              </A.InputContainer>
              <A.InputContainer>
                <A.Label htmlFor="password">Password </A.Label>
                <A.Input
                  type="password"
                  name="password"
                  value={creds?.password || ""}
                  onChange={handleChange}
                />
              </A.InputContainer>
              <A.Button type="sumbit">
                {location === "signin" ? "Login" : "Registration"}
              </A.Button>
            </A.Form>
            <A.AdditionalBlock>
              <A.Text>
                {location === "signin"
                  ? "Not registered yet?"
                  : "Already have an account?"}
              </A.Text>
              <A.Switch>
                <Link to={location === "signin" ? "/signup" : "/signin"}>
                  {location === "signin" ? "Registration" : "Login"}
                </Link>
              </A.Switch>
            </A.AdditionalBlock>
          </>
        )}
      </A.Container>
    </Container>
  );
}
