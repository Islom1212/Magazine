import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
};

type Page = {
  id: number;
  name: string;
  path: string;
};

export function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [pages, setPages] = useState<Page[]>([]);
  const [openCategory, setOpenCategory] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then(res => res.json())
      .then((data: Category[]) => setCategories(data));

    fetch("http://localhost:3001/api/pages")
      .then(res => res.json())
      .then((data: Page[]) => setPages(data));

    const current = localStorage.getItem("currentUser");
    setUser(current);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("currentUser");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <nav className="flex items-center justify-between gap-[150px] px-[80px] pt-[40px]">
      <div className="flex items-center space-x-[60px]">
        <Link to="/home">
          <img src="/public/svgs/logo.svg" alt="Logo" />
        </Link>

        <ul className="flex space-x-[30px]">
          <li className="relative">
            <button
              onClick={() => {
                setOpenCategory(!openCategory);
                setOpenPages(false);
              }}
              className="flex cursor-pointer items-center gap-1 font-medium text-gray-800"
            >
              Categories
              <span
                className={`transform transition-transform duration-200 ${openCategory ? "rotate-180" : "rotate-0"}`}
              >
                ▾
              </span>
            </button>

            {openCategory && (
              <ul className="absolute left-0 z-50 mt-2 w-48 rounded-md bg-white p-2 shadow-lg">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <Link
                      to={cat.path}
                      className="block rounded px-3 py-2 hover:bg-gray-100"
                      onClick={() => setOpenCategory(false)}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              onClick={() => {
                setOpenPages(!openPages);
                setOpenCategory(false);
              }}
              className="flex cursor-pointer items-center gap-1 font-medium text-gray-800"
            >
              Pages
              <span className={`transform transition-transform duration-200 ${openPages ? "rotate-180" : "rotate-0"}`}>
                ▾
              </span>
            </button>

            {openPages && (
              <ul className="absolute left-0 z-50 mt-2 w-48 rounded-md bg-white p-2 shadow-lg">
                {pages.map(page => (
                  <li key={page.id}>
                    <Link
                      to={page.path}
                      className="block rounded px-3 py-2 hover:bg-gray-100"
                      onClick={() => setOpenPages(false)}
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link to="/contact" className="text-[16px] font-medium text-gray-800">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-[16px] font-medium text-gray-800">
              About us
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-[10px] rounded-[10px] border bg-[#eeeded] px-4 py-2">
          <img src="../public/svgs/v6-icon.svg" alt="icon" />
          <input
            type="search"
            placeholder="Search anything"
            className="w-[250px] bg-transparent text-gray-700 outline-none"
          />
          <img src="../public/svgs/search.svg" alt="search" />
        </div>

        <div className="relative flex items-center gap-[10px]">
          <img src="../public/svgs/avatar.svg" alt="avatar" className="h-8 w-8 rounded-full" />
          <NavLink className="text-[16px] font-medium text-gray-800" to={"/profile-edit"}>
            {user}
          </NavLink>
          {user && (
            <button
              className="ml-2 rounded-[12px] bg-red-400 px-[10px] py-[5px] text-white hover:bg-red-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
