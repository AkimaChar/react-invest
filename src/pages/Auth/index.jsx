import React, { useState } from "react";
import { useLocation } from "react-router";
import AuthLayout from "./index.layout";
// import "../../style/desktop/signInUp.css";
// import "../../style/mobile/signInUp.css";
import { authorizationService } from "../../services/user";
import { errorMessage, warningMessage } from "../../utils";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/slices/user";

export default function Auth() {
  const location = useLocation().pathname.replace("/", "");
  const [creds, setCreds] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setCreds(props => {
      return {
        ...props,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!creds?.name?.length || !creds?.password?.length) {
      warningMessage("Fill both inputs");
    } else {
      setLoading(true);
      const { data } = await authorizationService(creds, location);
      setLoading(false);
      if (data.error) {
        errorMessage(data.error);
      } else {
        localStorage.setItem("access token", data);
        dispatch(logIn());
      }
    }
  };

  return (
    <AuthLayout
      location={location}
      creds={creds}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
