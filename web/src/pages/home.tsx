import { useEffect, useState } from "react";
import { Loading, Navbar } from "./index";

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/news")
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center">Home Page</h1>
    </div>
  );
}
