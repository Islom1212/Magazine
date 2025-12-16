import { useEffect, useState } from "react";
import { Footer, Loading, Navbar } from "./index";

export function Category() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/news").finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <div className="mx-[80px] mt-[45px] flex w-[1400px] items-center justify-between space-y-[15px] rounded-[12px] bg-gray-100 p-4">
        <div className="relative top-[8wpx] flex gap-[20px]">
          <p className="text-[14px] font-medium text-[#F81539]">New</p>
          <p className="text-[14px] font-medium text-[#3E3232BF]">Trendy</p>
          <p className="text-[14px] font-medium text-[#3E3232BF]">Popular</p>
          <p className="text-[14px] font-medium text-[#3E3232BF]">Top</p>
        </div>
        <img src="/public/svgs/types.svg" alt="" />
      </div>
      <div className="mt-[25px] pl-[80px]">
        <div className="my-[50px] flex items-center gap-[1180px]">
          <div className="flex items-center gap-[6px]">
            <div className="mt-[2px] h-3 w-1 rounded-2xl bg-[#F81539]"></div>
            <h1 className="text-[20px] font-medium">Category:Sport</h1>
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
      <div className="mt-[25px] pl-[80px]">
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
      <div className="mt-[25px] pl-[80px]">
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
      <Footer />
    </div>
  );
}
