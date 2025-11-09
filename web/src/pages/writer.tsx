import { useEffect, useState } from "react";
import { Loading, Navbar } from "./index";

export function Writer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/news").finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-2xl font-bold">Writer Page</h1>
    </div>
  );
}
