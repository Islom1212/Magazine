import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Category } from "./pages/category";
import { Writer } from "./pages/writer";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/single" element={<Single />} />
        <Route path="/writer" element={<Writer />} />
        <Route path="/category" element={<Category />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}
