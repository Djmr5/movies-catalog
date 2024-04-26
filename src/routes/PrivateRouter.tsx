import { Outlet } from "react-router-dom";
import { Header } from "../components";

const PrivateRouter: React.FC = () => {

  return (
    <>
      <Header />
      <div className="p-2 bg-gray-100">
        <Outlet />
      </div>
    </>
  );
};

export default PrivateRouter;
