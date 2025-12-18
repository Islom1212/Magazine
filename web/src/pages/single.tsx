import { useEffect, useState } from "react";
import { Footer, Loading, Navbar } from "./index";
import { SmilePlus, MessageCircle } from "lucide-react";

export function Single() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/news").finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Navbar />
      <div className="ml-[80px] flex items-center pt-[45px] pb-[45px]">
        <h1 className="text-[12px]">Home </h1>
        <span>/</span>
        <h1 className="text-[12px]">Featured</h1>
        <span>/</span>
        <p className="text-[12px] text-[#3E323280]">How to Spend the Perfect Day on Croatia's Most Magical Island</p>
      </div>
      <div className="flex justify-center">
        <div className="relative right-[80px] w-[950px]">
          <div className="h-[604px] w-full rounded-[12px] bg-[#F5F5F5] p-[32px]">
            <h1 className="text-[36px]">How to Spend the Perfect Day on Croatia's Most Magical Island</h1>
            <img src="/public/svgs/post-1.svg" alt="" className="h-[598px] w-[1072px] rounded-[30px]" />
          </div>
          <div className="mt-[100px] ml-[320px] flex gap-[79px]">
            <p>July 14, 2022</p>
            <p>comments : 35</p>
            <p>Category : Sport</p>
          </div>
          <div className="mt-[50px] flex flex-col items-center">
            <h1 className="mr-[630px] text-[20px] text-[#3E3232]">
              Don’t wait. The purpose of our lives is to be happy!
            </h1>
            <p className="mt-[10px] text-[18px] text-[#3E3232]">
              Upon arrival, your senses will be rewarded with the pleasant scent of lemongrass oil used to clean the
              natural wood found throughout the room, creating a relaxing atmosphere within the space. <br /> A
              wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I
              enjoy with my whole heart. I <br /> am alone, and feel the charm of existence in this spot, which was
              created for the bliss of souls like mine. I am so happy, my dear
              <br /> friend, so absorbed in the exquisite.
            </p>
            <img src="/public/svgs/board.svg" className="mt-[40px] w-[872px]" />
            <h1 className="mt-[40px] mr-[545px] text-[20px] text-[#3E3232]">
              Not how long, but how well you have lived is the main thing.
            </h1>
            <p className="mt-[10px] text-[18px] text-[#3E3232]">
              When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities
              at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has
              kayaks, paddleboards, or the low-key pedal boats. Snorkeling equipment is available as well, so you can
              experience the ever-changing undersea environment. <br /> Not only do visitors to a bed and breakfast get
              a unique perspective on the place they are visiting, they have options for special packages not available
              in other hotel settings. Bed and breakfasts can partner easily with local businesses for a smoothly
              organized and highly personalized vacation experience. The Fife and Drum Inn offers options such as the
              Historic Triangle Package that includes three nights at the Inn, breakfasts, and admissions to historic
              Williamsburg, Jamestown, and Yorktown. Bed and breakfasts also lend themselves to romance. <br /> Part of
              the charm of a bed and breakfast is the uniqueness; art, décor, and food are integrated to create a
              complete experience. For example, the Fife and Drum retains the colonial feel of the area in all its guest
              rooms. Special features include antique furnishings, elegant four poster beds in some guest rooms, as well
              folk art and artifacts from the restoration period of the historic area available for guests to enjoy.
            </p>
          </div>
          <div className="mt-[70px] flex items-center gap-[6px]">
            <div className="mt-[2px] h-3 w-1 rounded-2xl bg-[#F81539]"></div>
            <h1 className="text-[20px] font-medium">Coments</h1>
          </div>
          <div>
            <div className="mt-5 flex h-[270px] flex-col items-center rounded-xl bg-gray-100 p-4">
              <div className="flex items-center justify-between gap-[658px]">
                <div className="flex items-center gap-3">
                  <img
                    src="/public/svgs/jon.svg"
                    alt="author"
                    className="h-[60px] w-[60px] rounded-[12px] object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Jon Kantner</p>
                    <p className="text-xs text-gray-500">2022 04 July</p>
                  </div>
                </div>
                <button className="flex items-center rounded-[12px] bg-[#3E32320D] px-[16px] py-[10px] text-gray-500 hover:text-gray-700">
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.7539 5.52344L8.94141 9.65234C8.53125 10.0078 7.875 9.70703 7.875 9.16016V6.78125C3.60938 6.83594 1.80469 7.875 3.03516 11.8398C3.17188 12.2773 2.625 12.6328 2.26953 12.3594C1.06641 11.4844 0 9.81641 0 8.14844C0 3.99219 3.47266 3.08984 7.875 3.03516V0.875C7.875 0.300781 8.53125 0 8.94141 0.355469L13.7539 4.48438C14.0547 4.78516 14.0547 5.25 13.7539 5.52344Z"
                      fill="#3E3232"
                      fill-opacity="0.5"
                    />
                  </svg>
                  Replay
                </button>
              </div>
              <p className="mt-4 text-[14px] text-[#000000BF]">
                When you are ready to indulge your sense of excitement, check out the range of water- sports
                opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The
                resort has kayaks, paddleboards, or the low-key pedal boats.
              </p>
              <div className="mt-[30px] w-[872px] rounded-[12px] bg-white p-[15px] shadow-md">
                <div className="flex items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src="/public/svgs/cassie.svg"
                      alt="author"
                      className="h-[60px] w-[60px] rounded-[12px] object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Jon Kantner</p>
                      <p className="text-xs text-gray-500">2022 04 July</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[14px] text-[#000000BF]">
                  When you are ready to indulge your sense of excitement, check out the range of water- sports
                  opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The
                  resort has kayaks, paddleboards, or the low-key pedal boats.
                </p>{" "}
                <div className="mt-[40px] flex items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src="/public/svgs/behzad.svg"
                      alt="author"
                      className="h-[60px] w-[60px] rounded-[12px] object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Jon Kantner</p>
                      <p className="text-xs text-gray-500">2022 04 July</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[14px] text-[#000000BF]">
                  When you are ready to indulge your sense of excitement, check out the range of water- sports
                  opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The
                  resort has kayaks, paddleboards, or the low-key pedal boats.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-[260px] flex flex-col items-center rounded-xl bg-gray-100 p-4">
              <div className="flex items-center justify-between gap-[658px]">
                <div className="flex items-center gap-3">
                  <img
                    src="/public/svgs/jon.svg"
                    alt="author"
                    className="h-[60px] w-[60px] rounded-[12px] object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Jon Kantner</p>
                    <p className="text-xs text-gray-500">2022 04 July</p>
                  </div>
                </div>
                <button className="flex items-center rounded-[12px] bg-[#3E32320D] px-[16px] py-[10px] text-gray-500 hover:text-gray-700">
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.7539 5.52344L8.94141 9.65234C8.53125 10.0078 7.875 9.70703 7.875 9.16016V6.78125C3.60938 6.83594 1.80469 7.875 3.03516 11.8398C3.17188 12.2773 2.625 12.6328 2.26953 12.3594C1.06641 11.4844 0 9.81641 0 8.14844C0 3.99219 3.47266 3.08984 7.875 3.03516V0.875C7.875 0.300781 8.53125 0 8.94141 0.355469L13.7539 4.48438C14.0547 4.78516 14.0547 5.25 13.7539 5.52344Z"
                      fill="#3E3232"
                      fill-opacity="0.5"
                    />
                  </svg>
                  Replay
                </button>
              </div>
              <p className="mt-4 text-[14px] text-[#000000BF]">
                When you are ready to indulge your sense of excitement, check out the range of water- sports
                opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The
                resort has kayaks, paddleboards, or the low-key pedal boats.
              </p>
            </div>
          </div>
          <div className="mt-[60px] rounded-2xl bg-white p-8">
            <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-800">
              <span className="mt-[2px] mr-[5px] h-4 w-1 rounded-full bg-[#F81539]"></span>
              Add A Comment
            </h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-gray-50 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Website</label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-gray-50 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg bg-gray-50 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Comment</label>
                <textarea
                  placeholder="Search Anything"
                  className="h-[230px] w-full resize-none rounded-lg bg-gray-50 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 rounded-[12px] bg-[#F5F5F5] p-[10px]">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">Rate The Usefulness Of The Article</span>
                <div className="flex gap-2">
                  <button className="text-2xl transition-all hover:scale-110">😞</button>
                  <button className="text-2xl transition-all hover:scale-110">😕</button>
                  <button className="text-2xl transition-all hover:scale-110">😐</button>
                  <button className="text-2xl transition-all hover:scale-110">😊</button>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 rounded-[12px] bg-green-500 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-green-600 hover:shadow-lg">
                  <SmilePlus size={20} />
                  Good
                </button>
                <button className="flex items-center gap-2 rounded-[12px] bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 font-medium text-white transition-all hover:shadow-lg">
                  <MessageCircle size={20} />
                  Send Comment
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[260px]">
          <div className="flex gap-[10px]">
            <div className="flex items-center gap-[6px] rounded-[12px] bg-[#F5F5F5] px-[17px] py-[13px]">
              <img src="/public/svgs/share.svg" alt="" />{" "}
              <p className="mr-[17px] text-[14px] text-[#3E3232BF]">share</p>
            </div>
            <div className="flex items-center gap-[6px] rounded-[12px] bg-[#F5F5F5] px-[17px] py-[13px]">
              <img src="/public/svgs/marking.svg" alt="" />{" "}
              <p className="mr-[17px] text-[14px] text-[#3E3232BF]">marking</p>
            </div>
            <div className="flex items-center gap-[6px] rounded-[12px] bg-[#F5F5F5] px-[17px] py-[13px]">
              <img src="/public/svgs/comment.svg" alt="" />{" "}
              <p className="mr-[15px] text-[14px] text-[#3E3232BF]">comment</p>
            </div>
          </div>
          <div className="mt-5 flex w-[350px] items-center items-start gap-[40px] rounded-xl bg-gray-100 p-4">
            <div className="flex gap-[10px]">
              <img src="/public/svgs/louis.svg" alt="author" className="w-[87px]" />
              <div className="flex flex-col justify-between">
                <p className="ml-[5px] font-medium text-gray-800">Louis Hoebregts</p>
                <button className="rounded-[12px] bg-[#F81539BF] px-[24px] py-[10px] text-[14px] text-white">
                  + Follow
                </button>
              </div>
            </div>
            <p className="mt-[5px] text-[12px] text-[#3E3232BF]">27 post</p>
          </div>
          <div className="mt-5 w-[350px] gap-[40px] rounded-xl bg-gray-100 p-4">
            <h2 className="mb-6 flex items-center text-[20px] font-bold text-gray-800">
              <span className="mt-[2px] mr-[5px] h-[10px] w-[4px] rounded-full bg-[#F81539]"></span>
              Tags
            </h2>
            <div className="flex w-full flex-wrap gap-[14px]">
              <p className="font-medium text-[#3E3232BF]">Montenegro</p>
              <p className="font-medium text-[#3E3232BF]">Visit Croatia</p>
              <p className="font-medium text-[#3E3232BF]">Luxury Travel</p>
              <p className="font-medium text-[#3E3232BF]">Travel Log</p>
              <p className="font-medium text-[#3E3232BF]">Paradise Island</p>
              <p className="font-medium text-[#3E3232BF]">Travel Info</p>
            </div>
          </div>
          <div className="mt-5 w-[350px] gap-[40px] rounded-xl bg-gray-100 p-4">
            <h2 className="mb-6 flex items-center text-[20px] font-bold text-gray-800">
              <span className="mt-[2px] mr-[5px] h-[10px] w-[4px] rounded-full bg-[#F81539]"></span>
              Top posts
            </h2>
            <div className="mt-[20px] flex items-center gap-[10px]">
              <img src="/public/svgs/dodgi.svg" className="rounded-[12px]" />
              <div>
                <h1 className="text-[14px] font-medium text-[#3E3232]">
                  How to Spend the Perfect Day on Croatia's Most Magical Island
                </h1>
                <p className="mt-[10px] text-[12px] text-[#3E3232BF]">Subhead</p>
              </div>
            </div>
            <div className="mt-[20px] flex items-center gap-[10px]">
              <img src="/public/svgs/frog.svg" className="rounded-[12px]" />
              <div>
                <h1 className="text-[14px] font-medium text-[#3E3232]">
                  How to Spend the Perfect Day on Croatia's Most Magical Island
                </h1>
                <p className="mt-[10px] text-[12px] text-[#3E3232BF]">Subhead</p>
              </div>
            </div>
            <div className="mt-[20px] flex items-center gap-[10px]">
              <img src="/public/svgs/ballerina.svg" className="rounded-[12px]" />
              <div>
                <h1 className="text-[14px] font-medium text-[#3E3232]">
                  How to Spend the Perfect Day on Croatia's Most Magical Island
                </h1>
                <p className="mt-[10px] text-[12px] text-[#3E3232BF]">Subhead</p>
              </div>
            </div>
            <div className="mt-[20px] flex items-center gap-[10px]">
              <img src="/public/svgs/fod.svg" className="rounded-[12px]" />
              <div>
                <h1 className="text-[14px] font-medium text-[#3E3232]">
                  How to Spend the Perfect Day on Croatia's Most Magical Island
                </h1>
                <p className="mt-[10px] text-[12px] text-[#3E3232BF]">Subhead</p>
              </div>
            </div>
            <div className="mt-[20px] flex items-center gap-[10px]">
              <img src="/public/svgs/ballerina.svg" className="rounded-[12px]" />
              <div>
                <h1 className="text-[14px] font-medium text-[#3E3232]">
                  How to Spend the Perfect Day on Croatia's Most Magical Island
                </h1>
                <p className="mt-[10px] text-[12px] text-[#3E3232BF]">Subhead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[25px] pl-[80px]">
        <div className="my-[50px] flex items-center gap-[1180px]">
          <div className="flex items-center gap-[6px]">
            <div className="mt-[2px] h-3 w-1 rounded-2xl bg-[#F81539]"></div>
            <h1 className="text-[20px] font-medium">Related posts</h1>
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
                <img src="/svgs/cassie.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
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
            <img src="/public/svgs/03.png" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/louis-2.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
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
            <img src="/public/svgs/02.png" className="h-[190px] w-full rounded-[15px]" />

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
            <img src="/public/svgs/07.png" className="h-[190px] w-full rounded-[15px]" />

            <div className="mt-4 ml-[5px] px-[5px]">
              <h2 className="text-[16px] font-semibold text-gray-900">Opening Day Of Boating Season, Seattle WA</h2>

              <p className="mt-2 text-[12px] leading-[100%] text-gray-500">
                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is…
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img src="/public/svgs/louis-2.svg" alt="author" className="h-10 w-10 rounded-[12px] object-cover" />
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
