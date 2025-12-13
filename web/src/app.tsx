import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Category } from "./pages/category";
import { Writer } from "./pages/writer";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/not-found"; //Added NotFound import
import { Profile } from "./pages/profile";
import { ProfileEdit } from "./pages";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/single" element={<Single />} />
        <Route path="/writer" element={<Writer />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
//NotFound
