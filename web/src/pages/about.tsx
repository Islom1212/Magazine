import { Navbar, Footer } from "./index";

export function About() {
  return (
    <>
      <Navbar />
      <div className="mt-[160px] flex min-h-[60vh] items-center justify-center">
        <div className="w-[800px] rounded-lg bg-white p-[40px] shadow-md">
          <h1 className="mb-4 text-3xl font-bold">About Us</h1>
          <p className="text-gray-700">
            Welcome to our magazine. This page will contain information about our mission, team, and values.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
