import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages";
import Person from "./pages/Person";
import AddPerson from "./pages/AddPerson";
import Persons from "./pages/Persons";
import Login from "./pages/Login";
import RequireAuth from "./auth/RequireAuth";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "./redux/userAuth/userAuth.actions";
import Unauthorized from "./pages/Unauthorized";
import Layout from "./components/Layout";

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, personId } = useSelector(({ userAuth }) => userAuth);

  // Roles
  const ROLES = {
    user: 10,
    person: 100,
  };

  return (
    <div className="App container">
      <ul className="flex items-center my-5 justify-center py-5">
        <li className="mx-4 text-2xl">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4 text-2xl">
          <Link to="/persons">Persons</Link>
        </li>

        <li className="mx-4 text-2xl">
          <Link to="/persons/add">New Person</Link>
        </li>
        {isLoggedIn ? (
          <li className="mx-4 text-2xl">
            <Link to={`/persons/${personId}`}>My Profile</Link>
          </li>
        ) : null}

        <li className="mx-4 text-2xl">
          {isLoggedIn ? (
            <div
              onClick={() => dispatch(userLogout())}
              className="cursor-pointer bg-blue-500 p-2 text-white rounded-lg"
            >
              Logout
            </div>
          ) : (
            <Link to="/login" className="bg-blue-500 p-2 text-white rounded-lg">
              Login
            </Link>
          )}
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/unauthorized" element={<Unauthorized />} />

          {/* Protect Routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.person]} />}>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/persons" element={<Persons />} />
            <Route exact path="/persons/add" element={<AddPerson />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.person, ROLES.user]} />}>
            <Route exact path="/persons/:id" element={<Person />} />
          </Route>

          {/* 404 page */}
          <Route path="*" element={<h1>400 PAGE</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
