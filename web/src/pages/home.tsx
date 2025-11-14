import { useEffect, useState } from "react";
import { Loading, Navbar, CategoryScroll, Footer } from "./index";

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
      <div className="space-y-[40px] py-[70px] pl-[80px]">
        <div className="flex items-center gap-[1180px]">
          <div className="flex items-center gap-[6px]">
            <div className="mt-[2px] h-3 w-1 rounded-2xl bg-[#F81539]"></div>
            <h1 className="text-[20px] font-medium">Trendy Posts</h1>
          </div>
          <div className="flex items-center gap-[20px]">
            <img src="/public/svgs/left.svg" alt="" />
            <img src="/public/svgs/right.svg" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/post-1.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/post-1.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/post-1.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/post-1.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[40px] pl-[80px]">
        <div className="flex items-center gap-[1180px]">
          <div className="flex items-center gap-[6px]">
            <div className="mt-[2px] h-3 w-1 rounded-2xl bg-[#F81539]"></div>
            <h1 className="text-[20px] font-medium">New Posts</h1>
          </div>
          <div className="flex cursor-pointer gap-[9px] rounded-[12px] bg-[#F5F5F5] px-[24px] py-[10px]">
            <h1 className="text-[#3E3232BF]">Show all</h1>
            <img src="/public/svgs/right-1.svg" alt="" className="mt-[2px]" />
          </div>
        </div>
        <div className="flex gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <div className="flex h-[210px] w-[690px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
              <img src="/public/svgs/phone.svg" className="h-[190px] w-[340px] rounded-[15px]" />

              <div className="mt-4 ml-[5px] px-[5px]">
                <h2 className="text-[16px] font-semibold text-gray-900">12 Mobile UX Design Trends For 2018</h2>
                <p className="mt-2 text-[14px] text-gray-500">
                  Things move quickly in the mobile app universe. To succeed in the field of mobile UX design,
                  designers...
                </p>
                <div className="mt-[5px] flex items-center justify-between rounded-xl bg-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                    <div>
                      <p className="font-medium text-gray-800">Jon Kantner</p>
                      <p className="text-xs text-gray-500">July 14, 2022</p>
                    </div>
                  </div>

                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex h-[210px] w-[690px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
              <img src="/public/svgs/phone.svg" className="h-[190px] w-[340px] rounded-[15px]" />

              <div className="mt-4 ml-[5px] px-[5px]">
                <h2 className="text-[16px] font-semibold text-gray-900">12 Mobile UX Design Trends For 2018</h2>
                <p className="mt-2 text-[14px] text-gray-500">
                  Things move quickly in the mobile app universe. To succeed in the field of mobile UX design,
                  designers...
                </p>
                <div className="mt-[5px] flex items-center justify-between rounded-xl bg-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                    <div>
                      <p className="font-medium text-gray-800">Jon Kantner</p>
                      <p className="text-xs text-gray-500">July 14, 2022</p>
                    </div>
                  </div>

                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex h-[210px] w-[690px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
              <img src="/public/svgs/phone.svg" className="h-[190px] w-[340px] rounded-[15px]" />

              <div className="mt-4 ml-[5px] px-[5px]">
                <h2 className="text-[16px] font-semibold text-gray-900">12 Mobile UX Design Trends For 2018</h2>
                <p className="mt-2 text-[14px] text-gray-500">
                  Things move quickly in the mobile app universe. To succeed in the field of mobile UX design,
                  designers...
                </p>
                <div className="mt-[5px] flex items-center justify-between rounded-xl bg-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                    <div>
                      <p className="font-medium text-gray-800">Jon Kantner</p>
                      <p className="text-xs text-gray-500">July 14, 2022</p>
                    </div>
                  </div>

                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <div className="flex h-[210px] w-[690px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
              <img src="/public/svgs/phone.svg" className="h-[190px] w-[340px] rounded-[15px]" />

              <div className="mt-4 ml-[5px] px-[5px]">
                <h2 className="text-[16px] font-semibold text-gray-900">12 Mobile UX Design Trends For 2018</h2>
                <p className="mt-2 text-[14px] text-gray-500">
                  Things move quickly in the mobile app universe. To succeed in the field of mobile UX design,
                  designers...
                </p>
                <div className="mt-[5px] flex items-center justify-between rounded-xl bg-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                    <div>
                      <p className="font-medium text-gray-800">Jon Kantner</p>
                      <p className="text-xs text-gray-500">July 14, 2022</p>
                    </div>
                  </div>

                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex h-[210px] w-[690px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
              <img src="/public/svgs/phone.svg" className="h-[190px] w-[340px] rounded-[15px]" />

              <div className="mt-4 ml-[5px] px-[5px]">
                <h2 className="text-[16px] font-semibold text-gray-900">12 Mobile UX Design Trends For 2018</h2>
                <p className="mt-2 text-[14px] text-gray-500">
                  Things move quickly in the mobile app universe. To succeed in the field of mobile UX design,
                  designers...
                </p>
                <div className="mt-[5px] flex items-center justify-between rounded-xl bg-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                    <div>
                      <p className="font-medium text-gray-800">Jon Kantner</p>
                      <p className="text-xs text-gray-500">July 14, 2022</p>
                    </div>
                  </div>

                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex h-[210px] w-[690px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
              <img src="/public/svgs/phone.svg" className="h-[190px] w-[340px] rounded-[15px]" />

              <div className="mt-4 ml-[5px] px-[5px]">
                <h2 className="text-[16px] font-semibold text-gray-900">12 Mobile UX Design Trends For 2018</h2>
                <p className="mt-2 text-[14px] text-gray-500">
                  Things move quickly in the mobile app universe. To succeed in the field of mobile UX design,
                  designers...
                </p>
                <div className="mt-[5px] flex items-center justify-between rounded-xl bg-gray-100 p-4">
                  <div className="flex items-center gap-3">
                    <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                    <div>
                      <p className="font-medium text-gray-800">Jon Kantner</p>
                      <p className="text-xs text-gray-500">July 14, 2022</p>
                    </div>
                  </div>

                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[40px] py-[70px] pl-[80px]">
        <div className="flex items-center gap-[1180px]">
          <div className="flex items-center gap-[6px]">
            <div className="mt-[2px] h-3 w-1 rounded-2xl bg-[#F81539]"></div>
            <h1 className="text-[20px] font-medium">Trendy Posts</h1>
          </div>
          <div className="flex items-center gap-[20px]">
            <img src="/public/svgs/left.svg" alt="" />
            <img src="/public/svgs/right.svg" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/board.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/audi.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/audi.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/audi.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-[40px] pl-[80px]">
        <div className="flex items-center gap-[1180px]">
          <div className="flex items-center gap-[6px]">
            <div className="mt-[2px] h-3 w-1 rounded-2xl bg-[#F81539]"></div>
            <h1 className="text-[20px] font-medium">Top Posts</h1>
          </div>
          <div className="flex items-center gap-[20px]">
            <img src="/public/svgs/left.svg" alt="" />
            <img src="/public/svgs/right.svg" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/board.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/board.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/board.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[410px] w-[333px] rounded-2xl p-[10px] shadow-[0_1px_20px_rgba(0,0,0,0.1)]">
            <img src="/public/svgs/board.svg" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/james.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
                <div>
                  <p className="font-medium text-gray-800">James</p>
                  <p className="text-xs text-gray-500">August 18, 2022</p>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75V21L12 17.25 6.75 21V6.75A2.25 2.25 0 0 1 9 4.5h6a2.25 2.25 0 0 1 2.25 2.25Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
