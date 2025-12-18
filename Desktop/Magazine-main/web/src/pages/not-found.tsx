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
          <Link
            to="/home"
            className="mt-6 inline-block rounded bg-[#F81539] px-6 py-3 text-white hover:bg-[#d01431] focus:ring-2 focus:ring-[#F81539] focus:ring-offset-2 focus:outline-none"
          >
            Go to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
