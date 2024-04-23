import { Outlet } from "react-router-dom";
import { Header } from "../components";

const PrivateRouter: React.FC = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PrivateRouter;
