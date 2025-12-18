import { useState } from "react";
import { ProfileSendVideo } from "./profile-send-video";
import { ProfileSendPost } from "./profile-send-post";

type Tab = "post" | "video";

export function ProfileSend() {
  const [activeTab, setActiveTab] = useState<Tab>("post");

  return (
    <div className="mx-[80px]">
      <div className="mb-6 flex gap-[12px]">
        <button
          onClick={() => setActiveTab("post")}
          className={`px-4 py-2 text-[14px] ${activeTab === "post" ? "rounded bg-gray-200 text-[#F81539]" : "text-gray-500"}`}
        >
          Send Post
        </button>

        <button
          onClick={() => setActiveTab("video")}
          className={`px-4 py-2 text-[14px] ${activeTab === "video" ? "rounded bg-gray-200 text-[#F81539]" : "text-gray-500"}`}
        >
          Send Video
        </button>
      </div>

      <div>
        {activeTab === "post" && <ProfileSendPost />}
        {activeTab === "video" && <ProfileSendVideo />}
      </div>
    </div>
  );
}
