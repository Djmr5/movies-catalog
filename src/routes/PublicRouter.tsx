import { Outlet } from "react-router-dom";
import { useAppContext } from "../store/app-context/useAppContext";

const PublicRouter: React.FC = () => {
  const { loadingContext } = useAppContext();

  return (
    <>
      {loadingContext ? (
        <h1>Loading...</h1>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PublicRouter;
