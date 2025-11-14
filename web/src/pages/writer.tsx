import { useEffect, useState } from "react";
import { Footer, Loading, Navbar } from "./index";

export function Writer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/news").finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <div className="mx-[80px] mt-[45px] w-[1400px] rounded-[12px] bg-gray-100 p-4 space-y-[15px] ">
        <img src="/public/svgs/fon.svg" alt="" />
        <div className="flex items-center justify-between gap-[10px] rounded-[12px]">
          <div className="flex items-center gap-[10px]">
            <img src="/public/svgs/louis.svg" alt="author" className="w-[87px]" />
            <p className="ml-[5px] font-medium text-gray-800">Louis Hoebregts</p>
          </div>
          <div className="flex items-center gap-[24px]">
            <p className="flex items-center gap-[5px] text-[14px] text-[#3E3232BF]">
              <svg className="mt-[3px]" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.24609 0C7.51953 0 7.73828 0.164062 7.84766 0.382812L9.73438 4.23828L13.918 4.86719C14.1641 4.89453 14.3555 5.08594 14.4375 5.30469C14.5195 5.55078 14.4648 5.79688 14.2734 5.98828L11.2383 8.99609L11.9492 13.2344C12.0039 13.4805 11.8945 13.7539 11.7031 13.8906C11.4844 14.0273 11.2109 14.0547 10.9922 13.9453L7.24609 11.9219L3.5 13.9453C3.28125 14.0547 3.03516 14.0273 2.81641 13.8906C2.625 13.7539 2.51562 13.4805 2.54297 13.2344L3.28125 8.99609L0.246094 5.98828C0.0546875 5.79688 0 5.55078 0.0820312 5.30469C0.164062 5.08594 0.355469 4.89453 0.601562 4.86719L4.78516 4.23828L6.67188 0.382812C6.78125 0.164062 7 0 7.24609 0ZM7.24609 2.16016L5.82422 5.14062C5.71484 5.33203 5.55078 5.46875 5.33203 5.49609L2.07812 5.96094L4.42969 8.28516C4.59375 8.44922 4.64844 8.66797 4.62109 8.88672L4.07422 12.1406L6.94531 10.6094C7.13672 10.5 7.38281 10.5 7.57422 10.6094L10.4453 12.1406L9.89844 8.88672C9.84375 8.66797 9.92578 8.44922 10.0898 8.28516L12.4141 5.96094L9.1875 5.49609C8.96875 5.46875 8.77734 5.33203 8.69531 5.14062L7.24609 2.16016Z"
                  fill="#3E3232"
                  fill-opacity="0.5"
                />
              </svg>
              rate : 4.2
            </p>
            <p className="flex items-center gap-[5px] text-[14px] text-[#3E3232BF]">
              <svg className="mt-[3px]" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.4375 8.3125H4.8125C2.13281 8.3125 0 10.4727 0 13.125C0 13.6172 0.382812 14 0.875 14H11.375C11.8398 14 12.25 13.6172 12.25 13.125C12.25 10.4727 10.0898 8.3125 7.4375 8.3125ZM1.3125 12.6875C1.53125 10.9648 3.00781 9.625 4.8125 9.625H7.4375C9.21484 9.625 10.6914 10.9648 10.9102 12.6875H1.3125ZM6.125 7C8.03906 7 9.625 5.44141 9.625 3.5C9.625 1.58594 8.03906 0 6.125 0C4.18359 0 2.625 1.58594 2.625 3.5C2.625 5.44141 4.18359 7 6.125 7ZM6.125 1.3125C7.32812 1.3125 8.3125 2.29688 8.3125 3.5C8.3125 4.73047 7.32812 5.6875 6.125 5.6875C4.89453 5.6875 3.9375 4.73047 3.9375 3.5C3.9375 2.29688 4.89453 1.3125 6.125 1.3125Z"
                  fill="#3E3232"
                  fill-opacity="0.5"
                />
              </svg>
              follower : 1.2 k
            </p>
            <p className="flex items-center gap-[5px] text-[14px] text-[#3E3232BF]">
              <svg className="mt-[3px]" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.4688 0H4.15625C3.30859 0 2.625 0.710938 2.625 1.53125V10.2812C2.625 10.6641 2.32422 10.9375 1.96875 10.9375C1.58594 10.9375 1.3125 10.6641 1.3125 10.2812V2.1875C1.3125 1.83203 1.01172 1.53125 0.65625 1.53125C0.273438 1.53125 0 1.83203 0 2.1875V10.2812C0 11.375 0.875 12.25 1.96875 12.25H11.5938C12.9062 12.25 14 11.1836 14 9.84375V1.53125C14 0.710938 13.2891 0 12.4688 0ZM12.6875 9.84375C12.6875 10.4727 12.1953 10.9375 11.5938 10.9375H3.80078C3.88281 10.7461 3.9375 10.5273 3.9375 10.2812V1.53125C3.9375 1.42188 4.01953 1.3125 4.15625 1.3125H12.4688C12.5781 1.3125 12.6875 1.42188 12.6875 1.53125V9.84375ZM7.21875 6.5625H5.46875C5.08594 6.5625 4.8125 6.86328 4.8125 7.21875C4.8125 7.60156 5.08594 7.875 5.46875 7.875H7.21875C7.57422 7.875 7.875 7.60156 7.875 7.21875C7.875 6.86328 7.57422 6.5625 7.21875 6.5625ZM11.1562 6.5625H9.40625C9.02344 6.5625 8.75 6.86328 8.75 7.21875C8.75 7.60156 9.02344 7.875 9.40625 7.875H11.1562C11.5117 7.875 11.8125 7.60156 11.8125 7.21875C11.8125 6.86328 11.5117 6.5625 11.1562 6.5625ZM7.21875 8.75H5.46875C5.08594 8.75 4.8125 9.05078 4.8125 9.40625C4.8125 9.78906 5.08594 10.0625 5.46875 10.0625H7.21875C7.57422 10.0625 7.875 9.78906 7.875 9.40625C7.875 9.05078 7.57422 8.75 7.21875 8.75ZM11.1562 8.75H9.40625C9.02344 8.75 8.75 9.05078 8.75 9.40625C8.75 9.78906 9.02344 10.0625 9.40625 10.0625H11.1562C11.5117 10.0625 11.8125 9.78906 11.8125 9.40625C11.8125 9.05078 11.5117 8.75 11.1562 8.75ZM10.9375 2.1875H5.6875C5.19531 2.1875 4.8125 2.59766 4.8125 3.0625V4.8125C4.8125 5.30469 5.19531 5.6875 5.6875 5.6875H10.9375C11.4023 5.6875 11.8125 5.30469 11.8125 4.8125V3.0625C11.8125 2.59766 11.4023 2.1875 10.9375 2.1875Z"
                  fill="#3E3232"
                  fill-opacity="0.5"
                />
              </svg>
              post : 29
            </p>
          </div>
          <button className="rounded-[12px] bg-[#F81539BF] px-[24px] py-[10px] text-[14px] text-white">+ Follow</button>
        </div>
      </div>
      <div className="mt-[25px] pl-[80px]">
        <div className="my-[50px] flex items-center gap-[1180px]">
          <div className="flex items-center gap-[6px]">
            <div className="mt-[2px] h-3 w-1 rounded-2xl bg-[#F81539]"></div>
            <h1 className="text-[20px] font-medium">Latest posts</h1>
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
