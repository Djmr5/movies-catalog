import { Home, Popular, TopRated, NowPlaying, MyFavorites } from "../pages";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { ROUTES } from "./constants";

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME,
        element: <PrivateRouter />,
        children: [
            { path: ROUTES.HOME, element: <Home /> },
            { path: ROUTES.POPULAR, element: <Popular /> },
            { path: ROUTES.TOP_RATED, element: <TopRated /> },
            { path: ROUTES.NOW_PLAYING, element: <NowPlaying /> },
            { path: ROUTES.MY_FAVORITES, element: <MyFavorites /> },
        ],
    },
    {
        path: '/login',
        element: <PublicRouter />,
        children: [
            { path: "/login", element: <div>Login</div> },
        ],
    },
];

export const router = createBrowserRouter(routes);
