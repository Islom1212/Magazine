import React, { useState } from "react";
import { ProfileMarket } from "./profile-pages/profile-market";
import { ProfileSend } from "./profile-pages/profile-send";
import { ProfilePosts } from "./profile-pages/profile-posts";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Link } from "react-router-dom";

type Tab = "market" | "send" | "posts";

export function Profile() {
  const [activeTab, setActiveTab] = useState<Tab>("market");

  return (
    <>
      <Navbar />
      <div className="mx-[80px] mt-[45px] w-[1400px] space-y-[15px] rounded-[12px] bg-gray-100 p-4">
        <img src="/public/svgs/fon.svg" alt="" />
        <div className="flex items-center justify-between gap-[10px] rounded-[12px]">
          <div className="flex items-center gap-[10px]">
            <img src="/svgs/louis.svg" alt="author" className="w-[87px]" />
            <p className="ml-[5px] font-medium text-gray-800">Louis Hoebregts</p>
          </div>

          <div className="flex items-center gap-[24px]">
            <button
              onClick={() => setActiveTab("market")}
              className={`text-[14px] ${activeTab === "market" ? "text-[#F81539]" : "text-[#3E3232BF]"}`}
            >
              Marked
            </button>

            <button
              onClick={() => setActiveTab("send")}
              className={`text-[14px] ${activeTab === "send" ? "text-[#F81539]" : "text-[#3E3232BF]"}`}
            >
              Send Post
            </button>

            <button
              onClick={() => setActiveTab("posts")}
              className={`text-[14px] ${activeTab === "posts" ? "text-[#F81539]" : "text-[#3E3232BF]"}`}
            >
              Posts
            </button>
          </div>

          <Link
            to="/profile-edit"
            className="flex gap-[5px] rounded-[12px] border-2 border-gray-300 px-[24px] py-[10px] text-[14px] text-[#F81539BF] hover:border-[#F81539] hover:text-[#F81539]"
          >
            <img src="/svgs/edit.svg" alt="svg-image" />
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === "market" && <ProfileMarket />}
        {activeTab === "send" && <ProfileSend />}
        {activeTab === "posts" && <ProfilePosts />}
      </div>
      <Footer />
    </>
  );
}
