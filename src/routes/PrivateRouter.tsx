import { Outlet } from "react-router-dom";
import { Header } from "../components";

const PrivateRouter: React.FC = () => {

  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div className="p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PrivateRouter;
