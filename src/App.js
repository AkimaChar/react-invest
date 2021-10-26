import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { updateCoins } from "./redux/slices/coins";
import SideMenu from "./components/SideMenu.jsx";
import { useRoutes } from "./routes";
import { AppContainer } from "./index.styled";

export default function App() {
  const socket = useRef(null);
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.user);
  const routes = useRoutes(isAuth);

  useEffect(() => {
    if (isAuth) {
      socket.current = io(
        process.env.REACT_APP_ENV === "production"
          ? process.env.REACT_APP_API_URL_ORIGIN
          : process.env.REACT_APP_API_URL_DEV
      );

      socket.current.on("updateCoins", data => {
        dispatch(updateCoins(data));
      });

      return () => {
        socket.current.disconnect();
      };
    }
  }, []);

  return (
    <AppContainer>
      <SideMenu auth={isAuth} />
      {routes}
    </AppContainer>
  );
}
