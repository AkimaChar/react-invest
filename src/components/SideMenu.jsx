import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Add } from "../style/img/add.svg";
import { ReactComponent as Coins } from "../style/img/trading.svg";
import { ReactComponent as Comment } from "../style/img/comm.svg";
import { ReactComponent as Logout } from "../style/img/logOut.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/slices/user";
import styled from "styled-components";
import { useSelector } from "react-redux";
import useWindowSize from "../hooks/use-window-size";
import MobileMenu from "./MobileMenu";

export default function SideMenu({ auth }) {
  const location = useLocation().pathname.replace("/", "");
  const dispatch = useDispatch();
  const { isAuth, data } = useSelector(state => state.user);
  const { width } = useWindowSize();

  const handleLogout = () => {
    dispatch(logOut());
    // remove cookies
  };

  return (
    <SideBarContainer>
      <Logotype>
        <LogoBlur>
          <Logo />
        </LogoBlur>
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
            Trending <br />
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
      <AuthButton auth={isAuth}>
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
      {isAuth && !!data && (
        <UserAvatar>
          <Link to="/">
            <img src={data.avatar} alt={data.name} />
          </Link>
        </UserAvatar>
      )}
      {width <= 870 && <MobileMenu handleLogout={handleLogout} />}
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
  @media (max-width: 1230px) {
    padding: 20px 10px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    background: none;
    backdrop-filter: blur(0);
    padding: 20px 25px;
    justify-content: space-between;
  }
`;

const Logotype = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  > svg {
    position: relative;
    z-index: 5;
  }
  cursor: default;
  @media (max-width: 1230px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const LogoBlur = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  filter: blur(15px);
`;

const SideBarLinks = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 30px;
  @media (max-width: 1230px) {
    margin-top: 20px;
    row-gap: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
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
    line-height: 113%;
    color: #ffffff;
    opacity: 0.2;
    transition: 300ms;
    @media (max-width: 1420px) {
      font-size: 12px;
    }
    @media (max-width: 1230px) {
      font-size: 10px;
    }
  }
  svg {
    width: 30px;
    height: 30px;
    transition: 300ms;
    @media (max-width: 1230px) {
      width: 20px;
      height: 20px;
    }
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
  margin-top: ${({ auth }) => (auth ? "30px" : "auto")};
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 20px;
  margin-top: auto;
  @media (max-width: 1230px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
