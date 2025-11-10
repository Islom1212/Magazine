import React from "react";

export function CategoryScroll() {
  const categories = [
    {
      hashtag: "#Food",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
    },
    {
      hashtag: "#Animal",
      image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=300&fit=crop"
    },
    {
      hashtag: "#Car",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop"
    },
    {
      hashtag: "#Sport",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop"
    },
    {
      hashtag: "#Music",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop"
    },
    {
      hashtag: "#Technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      hashtag: "#Abstract",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=300&fit=crop"
    },
    {
      hashtag: "#Nature",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
    }
  ];
  return (
    <div className="w-[1400px] absolute  bg-[#F5F5F5] p-3 rounded-[10px] ml-[78px] mt-[40px]">
      <div>
        <div className="scrollbar-hide flex gap-[30px] overflow-x-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative h-[48px] w-[170px] flex-shrink-0 transform cursor-pointer overflow-hidden rounded-[12px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage: `url('${cat.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br backdrop-blur-[3px]`}
              >
                <span className="text-sm font-semibold text-white drop-shadow-lg">{cat.hashtag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
    </div>
    
  );
}
