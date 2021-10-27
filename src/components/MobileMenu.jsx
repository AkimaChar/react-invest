import { Drawer } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Add } from "../style/img/add.svg";
import { ReactComponent as Coins } from "../style/img/trading.svg";
import { ReactComponent as Comment } from "../style/img/comm.svg";
import { ReactComponent as Logout } from "../style/img/logOut.svg";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function MobileMenu({ handleLogout }) {
  const [visible, setVisible] = useState(false);
  const location = useLocation().pathname.replace("/", "");
  const { isAuth, data } = useSelector(state => state.user);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <BurgerIcon onClick={showDrawer}>
        <span></span>
      </BurgerIcon>
      <Drawer
        title={false}
        placement="right"
        onClose={onClose}
        visible={visible}
        width="100%"
      >
        <MenuContainer>
          {isAuth && !!data && (
            <UserContainer>
              <UserAvatar>
                <img src={data.avatar} alt={data.name} />
              </UserAvatar>
              <UserName>{data.name}</UserName>
            </UserContainer>
          )}
          <MenuLinks>
            <MenuLink>
              <Link to="/admin">
                <Add />
                Add
              </Link>
            </MenuLink>
            <MenuLink>
              <Link to="/coins">
                <Coins />
                Trending coins
              </Link>
            </MenuLink>
            <MenuLink>
              <Link to="/comments">
                <Comment />
                Comments
              </Link>
            </MenuLink>
          </MenuLinks>
          <AuthButton auth={isAuth}>
            {isAuth ? (
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
        </MenuContainer>
      </Drawer>
    </>
  );
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #fff;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 15px;
  margin-bottom: 40px;
`;

const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 20px;
`;

const UserName = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const MenuLink = styled.div`
  > * {
    gap: 15px;
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 15px;
    line-height: 113%;
    color: #ffffff;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

const AuthButton = styled(MenuLink)`
  margin-top: auto;
`;

const BurgerIcon = styled.div`
  position: relative;
  width: 40px;
  height: 25px;
  span {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  span,
  &::after,
  &::before {
    position: absolute;
    background: #ffffff;
    height: 4px;
    border-radius: 4px;
    right: 0;
    transition: 300ms;
  }
  &::before {
    content: "";
    width: 26px;
    top: 0;
  }
  &::after {
    content: "";
    width: 19px;
    bottom: 0;
  }
  &:hover {
    &::after,
    &::before {
      width: 100%;
    }
  }
`;
