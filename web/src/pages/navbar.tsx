import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <nav className="mx-[204px] my-[45px] flex items-center justify-between">
      <div className="flex items-center space-x-10">
        <Link to="/">
          <img src="/public/svgs/logo.svg" alt="" />
        </Link>
        <ul className="flex space-x-[34px]">
          <li>
            <Link to="/" className="text-[16px] font-medium text-[#3E3232]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/single" className="text-[16px] font-medium text-[#3E3232]">
              Single
            </Link>
          </li>
          <li>
            <Link to="/category" className="text-[16px] font-medium text-[#3E3232]">
              Category
            </Link>
          </li>
          <li>
            <Link to="/writer" className="text-[16px] font-medium text-[#3E3232]">
              Writer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
