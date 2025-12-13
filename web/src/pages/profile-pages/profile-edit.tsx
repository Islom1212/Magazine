import { Navbar, Footer } from "../index";

export function ProfileEdit() {
  return (
    <>
      <Navbar />
      <div className="mt-[160px] min-h-[60vh] p-[40px]">
        <h1 className="text-3xl font-bold">Edit Profile</h1>
        <p className="mt-2 text-gray-600">Update your profile information and preferences.</p>
      </div>
      <Footer />
    </>
  );
}
