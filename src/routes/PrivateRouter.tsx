import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { useAppContext } from "../store/app-context/useAppContext";

const PrivateRouter: React.FC = () => {
  const { loadingContext } = useAppContext();

  return (
    <>
      {loadingContext ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Header />
          <div className="bg-gray-100">
            <div className="p-2">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PrivateRouter;
