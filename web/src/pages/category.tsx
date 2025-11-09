import { useEffect, useState } from "react";
import {  Loading, Navbar } from "./index";

export function Category() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/news").finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-2xl font-bold">Category Page</h1>
    </div>
  );
}
