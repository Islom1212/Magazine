import { useEffect, useState } from "react";
import { Loading, Navbar } from "./index";
import { CategoryScroll } from "./scroll-category";

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/news").finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Navbar />
      <CategoryScroll />
      <div className="mt-[160px] ml-[80px] flex gap-[10px]">
        <div
          className="flex h-[452px] w-[360px] items-end rounded-[12px] p-[10px]"
          style={{
            backgroundImage: `url('../public/svgs/car.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="w-full rounded-[8px] bg-[#ffffffbd] p-[16px]">
            <h1 className="text-[25px]">How to Drive a Car Safely</h1>
            <p className="font-400 text-[14px] text-[#000000BF]">
              Ah, the joy of the open road—it's a good feeling. But if you're new to driving, you may...
            </p>
          </div>
        </div>
        <div
          className="flex h-[452px] w-[360px] items-end rounded-[12px] p-[10px]"
          style={{
            backgroundImage: `url('../public/svgs/girl.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="w-full rounded-[8px] bg-[#ffffffbd] p-[16px]">
            <h1 className="text-[25px]">How to Make Dance Music</h1>
            <p className="font-400 text-[14px] text-[#000000BF]">
              Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking...
            </p>
          </div>
        </div>
        <div
          className="flex h-[452px] w-[660px] items-end rounded-[12px] p-[10px]"
          style={{
            backgroundImage: `url('../public/svgs/computer.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="w-full rounded-[8px] bg-[#ffffffbd] p-[16px]">
            <h1 className="text-[25px]">Why I Stopped Using Multiple Monitor</h1>
            <p className="font-400 text-[14px] text-[#000000BF]">
              A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have
              proven it, right? Well, keep in mind, many of... like
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
