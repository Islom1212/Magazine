import { Link } from "react-router-dom";
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

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then(res => res.json())
      .then((data: Category[]) => setCategories(data));

    fetch("http://localhost:3001/api/pages")
      .then(res => res.json())
      .then((data: Page[]) => setPages(data));
  }, []);

  return (
    <nav className="flex items-center justify-between gap-[150px] px-[80px] pt-[40px]">
      <div className="z-[1] flex items-center space-x-[60px]">
        <Link to="/home">
          <img src="/public/svgs/logo.svg" alt="" />
        </Link>
        <ul className="flex space-x-[30px]">
          <li className="relative">
            <button
              onClick={() => {
                setOpenCategory(!openCategory);
                setOpenPages(false);
              }}
              className="flex cursor-pointer items-center gap-1"
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
                {categories.map((cat, i) => (
                  <li key={cat.id}>
                    {i === 2 ? (
                      <Link
                        to="/single"
                        className="block rounded px-3 py-2 hover:bg-gray-100"
                        onClick={() => setOpenCategory(false)}
                      >
                        {cat.name}
                      </Link>
                    ) : i === 4 ? (
                      <Link
                        to="/category"
                        className="block rounded px-3 py-2 hover:bg-gray-100"
                        onClick={() => setOpenCategory(false)}
                      >
                        {cat.name}
                      </Link>
                    ) : (
                      <span className="block cursor-default px-3 py-2 text-gray-500">{cat.name}</span>
                    )}
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
              className="flex cursor-pointer items-center gap-1"
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
            <Link to="/writer" className="text-[16px] font-medium text-[#3E3232]">
              Writer
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-[16px] font-medium text-[#3E3232]">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-[16px] font-medium text-[#3E3232]">
              About us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-[20px] rounded-[10px] border bg-[#eeeded] px-4 py-2">
          <img src="../public/svgs/v6-icon.svg" alt="" />
          <input type="search" placeholder="Search anything" className="w-[250px]" />
          <img src="../public/svgs/search.svg" alt="" />
        </div>
        <div className="flex items-center justify-center gap-[10px]">
          <img src="../public/svgs/avatar.svg" alt="" />
          <p className="text-[16px] font-medium text-[#3E3232]">Behzad</p>
          <button className="cursor-pointer">▾</button>
        </div>
      </div>
    </nav>
  );
}
