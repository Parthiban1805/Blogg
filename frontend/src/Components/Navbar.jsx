import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo3.png";
import { useDispatch, useSelector } from "react-redux";
import { BaseUrl } from "../services/Endpoint";
import { RemoveUser } from "../redux/AuthSlice";
import axios from "axios";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const handleLogout = async () => {
    try {
      const response = await axios.post(`${BaseUrl}/auth/logout`);
      const data = response.data;
      console.log(data);
      if (response.status == 200) {
        navigate("/");
        dispatch(RemoveUser());
        toast.success("Logout Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar d-flex justify-content-between   align-items-center p-3">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            className="img"
            src={logo}
            style={{ width: "80px", height: "auto" }}
            alt="Logo"
          />
          <span
            style={{
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
              marginLeft: "8px",
            }}
          >
            BIT
          </span>
        </Link>
        <div className="d-flex align-items-center">
          {!user ? (
            <Link to={"/login"}>
              <button className="btn_sign mx-3">Sign in</button>
            </Link>
          ) : (
            <div className="dropdown">
              <div
                className="avatar-container pointer rounded-circle overflow-hidden bg-info"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: "60px", height: "60px", cursor: "pointer" }}
              >
                <img
                  className="img-fluid h-100 w-100 "
                  style={{ objectFit: "cover" }}
                  src={`${BaseUrl}/images/${user.profile}`}
                  alt=""
                />
              </div>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                {user.role == "admin" ? (
                  <li>
                    <Link className="dropdown-item" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                ) : (
                  " "
                )}
                <li>
                  <Link className="dropdown-item" to={`/profile/1234`}>
                    Profile
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item "
                    style={{ cursor: "pointer" }}
                    onClick={handleLogout}
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
