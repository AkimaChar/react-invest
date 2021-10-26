import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../style/img/logo.svg";
import { ReactComponent as Add } from "../style/img/add.svg";
import { ReactComponent as Coins } from "../style/img/trading.svg";
import { ReactComponent as Comment } from "../style/img/comm.svg";
import { ReactComponent as Logout } from "../style/img/logOut.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/slices/user";
import styled from "styled-components";

export default function SideMenu({ auth }) {
  const location = useLocation().pathname.replace("/", "");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    // remove cookies
  };

  return (
    <SideBarContainer>
      <Logotype>
        <Logo />
      </Logotype>
      <SideBarLinks>
        <SideBarLink>
          <Link to="/admin">
            <Add />
            Add
          </Link>
        </SideBarLink>
        <SideBarLink>
          <Link to="/coins">
            <Coins />
            Trading <br />
            coins
          </Link>
        </SideBarLink>
        <SideBarLink>
          <Link to="/comments">
            <Comment />
            Comments
          </Link>
        </SideBarLink>
      </SideBarLinks>
      <AuthButton>
        {auth ? (
          <button onClick={handleLogout}>
            <Logout /> Logout
          </button>
        ) : (
          <Link to={location === "signin" ? "/signup" : "/signin"}>
            <Logout />
            {location === "signin" ? "Sign Up" : "Sign In"}
          </Link>
        )}
      </AuthButton>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  padding: 30px 15px;
`;

const Logotype = styled.div`
  width: 60px;
  height: 110px;
`;

const SideBarLinks = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
`;

const SideBarLink = styled.div`
  > * {
    row-gap: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    color: #ffffff;
    opacity: 0.2;
    transition: 300ms;
  }
  svg {
    width: 30px;
    height: 30px;
    transition: 300ms;
  }
  &:hover {
    > * {
      color: #00a3ff;
      opacity: 1;
    }
    svg {
      path {
        fill: #00a3ff;
      }
    }
  }
  &:nth-of-type(2):hover svg path {
    fill: none;
    stroke: #00a3ff;
  }
`;

const AuthButton = styled(SideBarLink)`
  margin-top: auto;
`;
