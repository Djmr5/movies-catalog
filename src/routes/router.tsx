import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Home, Login, MyFavorites, NowPlaying, Popular, Show, TopRated } from "../pages";
import { useAppContext } from "../store/app-context/useAppContext";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { ROUTES } from "./constants";

export const AppRouter = () => {
  const { user } = useAppContext();
  const isLogged = Boolean(user);

  const routes: RouteObject[] = [
    {
      path: ROUTES.HOME,
      element: isLogged ? <PrivateRouter /> : <Navigate to={ROUTES.LOGIN} />,
      children: [
        { path: ROUTES.HOME, element: <Home /> },
        { path: ROUTES.POPULAR, element: <Popular /> },
        { path: ROUTES.TOP_RATED, element: <TopRated /> },
        { path: ROUTES.NOW_PLAYING, element: <NowPlaying /> },
        { path: ROUTES.MY_FAVORITES, element: <MyFavorites /> },
        { path: `${ROUTES.MOVIE}:id`, element: <Show /> },
        { path: "*", element: <h1 className="p-6">404: There is nothing here.</h1> },
      ],
    },
    {
      path: ROUTES.HOME,
      element: isLogged ? <Navigate to={ROUTES.HOME} /> : <PublicRouter />,
      children: [
        { path: ROUTES.LOGIN, element: <Login /> },
        { path: ROUTES.REGISTER, element: <Login /> },
        { path: "*", element: <Navigate to={ROUTES.LOGIN} /> },
      ],
    },
  ];

  return createBrowserRouter(routes);
};
