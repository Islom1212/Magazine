import { Navbar, Footer } from "./index";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <Navbar />
      <div className="mt-auto flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-[100px] font-medium text-[#F81539] drop-shadow-[0_0_10px_rgba(248,21,57,0.8)]">404</h1>
          <p className="mt-4 text-gray-600">OOPS! Page you're looking for doesn't exist. Please use search for help</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
