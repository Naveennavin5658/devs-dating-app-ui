import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";

const NavBar = () => {
  
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      dispatch(removeFeed());
      return navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          🧑‍💻❤️👩‍💻 GitCommitMe 🧑‍💻❤️👩‍💻
        </Link>
        <h2>Because your love life needs version control.</h2>
      </div>

      <div className="flex gap-2">
        {user && (
          <div className="dropdown dropdown-end">
            <div className="toast toast-top toast-end">
              <div className="alert  mx-20 flex">
                <span>Welcome, {user?.firstName + " " + user?.lastName}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mx-10"
            >
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoUrl} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
