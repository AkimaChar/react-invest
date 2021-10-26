import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { updateCoins } from "./redux/slices/coins";
import SideMenu from "./components/SideMenu.jsx";
import { useRoutes } from "./routes";
import { AppContainer } from "./index.styled";
import { checkAuthorizationService, getUserDataService } from "./services/user";
import { logOut, updateUserData } from "./redux/slices/user";
import Loader from "./components/Loader";

export default function App() {
  const socket = useRef(null);
  const dispatch = useDispatch();
  const { isAuth, data } = useSelector(state => state.user);
  const routes = useRoutes(isAuth);

  const [loading, setLoading] = useState(true);

  const handleCheckAuth = async () => {
    const response = await checkAuthorizationService();
    if (response.status === 401) {
      setLoading(false);
      dispatch(logOut());
    } else if (response.status === 200) {
      const { data } = await getUserDataService();
      dispatch(updateUserData(data));
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCheckAuth();
  }, []);

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
  }, [dispatch, isAuth]);

  return (
    <AppContainer>
      <SideMenu auth={isAuth} />
      {loading || (isAuth && !data) ? <Loader /> : routes}
    </AppContainer>
  );
}
