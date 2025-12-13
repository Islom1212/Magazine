import { Navbar, Footer } from "./index";

export function Contact() {
  return (
    <>
      <Navbar />
      <div className="mt-[160px] flex min-h-[60vh] items-center justify-center">
        <div className="w-[800px] rounded-lg bg-white p-[40px] shadow-md">
          <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-700">
            Have a question or feedback? Reach out via email or social media. This page will include contact details and
            a contact form.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
