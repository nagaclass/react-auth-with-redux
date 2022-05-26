import { useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import UnauthorizedImg from "../assets/unauthorized-access.png";

const Unauthorized = () => {
  const { isLoggedIn } = useSelector(({ userAuth }) => userAuth);
  const location = useLocation();

  return isLoggedIn ? (
    <div className="flex flex-col items-center">
      <img
        src={UnauthorizedImg}
        alt="unauthorized"
        width={500}
        height="auto"
        className="text-center mb-4"
      />
      <h1 className="text-2xl">
        You don't have access to this page,{" "}
        <Link to="/persons/3" className="underline">
          Back to your Profile!
        </Link>
      </h1>
    </div>
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default Unauthorized;
