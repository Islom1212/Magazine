import React, { useState } from "react";
import { Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const categories = ["Culture", "Fashion", "Featured", "Food", "Healthy Living", "Technology"];

  const comments = [
    { name: "Ellemartx", text: "How Nice Does This Look 😍 I Feel It Should Be..." },
    { name: "Cassia", text: "Take A Rest, I'll Be Cheer Up You Again In 2 Next..." },
    { name: "Amanda", text: "You Were Stunning Today, Jan! 💖 Great March" },
    { name: "Denis Simonassi", text: "It Was A Great Match Today Jan!! You Did Great!" }
  ];

  const instagramPosts = [
    { id: 1, bg: "bg-gradient-to-br from-purple-400 to-pink-400" },
    { id: 2, bg: "bg-gradient-to-br from-yellow-400 to-orange-500" },
    { id: 3, bg: "bg-gradient-to-br from-indigo-500 to-purple-600" },
    { id: 4, bg: "bg-gradient-to-br from-orange-400 to-yellow-300" },
    { id: 5, bg: "bg-gradient-to-br from-blue-400 to-cyan-400" },
    { id: 6, bg: "bg-gradient-to-br from-red-400 to-pink-500" },
    { id: 7, bg: "bg-gradient-to-br from-pink-500 to-rose-500" },
    { id: 8, bg: "bg-gradient-to-br from-purple-500 to-pink-600" },
    { id: 9, bg: "bg-gradient-to-br from-indigo-600 to-blue-500" }
  ];

  return (
    <div className="mt-[70px] w-full pr-[35px] pb-[40px]">
      <footer className="flex gap-[24px]">
        <div className="flex h-[483px] w-[808px] flex-col justify-center rounded-tr-[50px] rounded-br-[50px] bg-[#F5F5F5]">
          <div className="flex gap-[113px] ml-[80px]">
            <div>
              <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
                <span className="mr-2 h-6 w-1 bg-red-500"></span>
                Mega News
              </h3>
              <p className="w-[360px] text-[14px] leading-relaxed text-gray-600">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et
                Dolore Magna Aliqua. Egestas Purus Viverra Accumsan In Nisl Nisi. Arcu Cursus Vitae Congue Mauris
                Rhoncus Aenean Vel Elit Scelerisque. In Egestas Erat Imperdiet Sed Euismod Nisi Porta Lorem Mollis.
                Morbi Tristique Senectus Et Netus. Mattis Pellentesque Id Nibh Tortor Id Aliquet Lectus Proin.
              </p>

              <div className="mt-6">
                <h4 className="mb-3 flex items-center text-lg font-bold text-gray-800">
                  <span className="mr-2 h-6 w-1 bg-red-500"></span>
                  Newsletters
                </h4>
                <div className="flex gap-2 bg-white px-[8px] py-[12px] rounded-[12px]">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Write Your Email..."
                    className="flex-1 rounded-lg text-sm focus:ring-2 focus:ring-gray-400 focus:outline-none"
                  /> 
                    <Mail className="w-[20px] h-[20px]"/>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
                <span className="mr-2 h-6 w-1 bg-red-500"></span>
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map(cat => (
                  <li key={cat}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-purple-600 hover:underline"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <h4 className="mb-3 flex items-center text-lg font-bold text-gray-800">
                  <span className="mr-2 h-6 w-1 bg-red-500"></span>
                  Social Network
                </h4>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg">
                    <Instagram size={16} />
                    Instagram
                  </button>
                  <button className="rounded-full bg-blue-400 p-2 text-white transition-colors hover:bg-blue-500">
                    <Twitter size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px] mr-[80px] flex items-center justify-between rounded-tr-[12px] rounded-br-[12px] bg-[#3E32320D] py-[17px] pr-[12px] pl-[80px] text-[12px] text-[#3E3232BF]">
            <div className="flex gap-[5px]">
              <a href="#" className="transition-colors hover:text-purple-600">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="transition-colors hover:text-purple-600">
                Terms & Conditions
              </a>
            </div>
            <div>All Copyright © 2022 Reserved</div>
          </div>
        </div>
        <div className="flex gap-[24px] mt-[30px]">
          <div>
            <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
              <span className="mr-2 h-6 w-1 bg-red-500"></span>
              New Comments
            </h3>
            <div className="space-y-[20px]">
              {comments.map(comment => (
                <div key={comment.name} className="w-[300px] h-[75px] p-[16px] bg-[#F5F5F5] rounded-[12px]">
                  <h4 className="text-sm font-semibold text-gray-800">{comment.name}</h4>
                  <p className="mt-1 line-clamp-2 text-xs text-gray-600">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Follow On Instagram */}
          <div>
            <h3 className="mb-4 flex items-center text-lg font-bold text-gray-800">
              <span className="mr-2 h-6 w-1 bg-red-500"></span>
              Follow On Instagram
            </h3>
            <div className="grid grid-cols-3 gap-[24px]">
              {instagramPosts.map(post => (
                <div
                  key={post.id}
                  className={`${post.bg} w-[104px] h-[104px] rounded-[12px] hover:scale-105`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
