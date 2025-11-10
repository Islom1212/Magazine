import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Category = { id: number; name: string };

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <nav className="flex items-center gap-[150px] justify-between pt-[40px] px-[80px]">
      <div className="z-[1] flex items-center space-x-[60px]">
        <Link to="/">
          <img src="/public/svgs/logo.svg" alt="" />
        </Link>
        <ul className="flex space-x-[30px]">
          <li>
            <div>
              <button
                onClick={() => setOpen(!open)}
                className="relative bottom-[2px] flex cursor-pointer items-center justify-center gap-1 text-[16px] font-medium text-[#3E3232]"
              >
                Categories
                <span className="text-lg">▾</span>
              </button>

              {open && (
                <ul className="absolute w-40 rounded bg-white p-2 shadow">
                  {categories.map((cat, i) => (
                    <li key={cat.id}>
                      {i === 2 ? (
                        <Link to="/single" className="block px-2 py-1 hover:bg-gray-100">
                          {cat.name}
                        </Link>
                      ) : i === 4 ? (
                        <Link to="/category" className="block px-2 py-1 hover:bg-gray-100">
                          {cat.name}
                        </Link>
                      ) : (
                        <span className="block cursor-default px-2 py-1 text-gray-500">{cat.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
          <li>
            <div>
              <button className="relative bottom-[2px] flex cursor-pointer items-center justify-center gap-1 text-[16px] font-medium text-[#3E3232]">
                Pages
                <span className="text-lg">▾</span>
              </button>
            </div>
          </li>
          <li>
            <Link to="/writer" className="text-[16px] font-medium text-[#3E3232]">
              Writer
            </Link>
          </li>
          <li>
            <Link to="/writer" className="text-[16px] font-medium text-[#3E3232]">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/writer" className="text-[16px] font-medium text-[#3E3232]">
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
