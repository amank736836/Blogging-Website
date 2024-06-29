import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn, ThemeBtn } from "../index.js";

function Header() {
  const authStatus = useSelector((state) => state.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-2 bg-gray-100 shadow dark:bg-gray-900 dark:text-white">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="ml-4">
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 duration-200 rounded-full hover:bg-blue-500 hover:text-white dark:hover:bg-green-700 dark:hover:text-white"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="ml-4">
                <LogoutBtn />
              </li>
            )}
            <li className="ml-4">
              <ThemeBtn />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
