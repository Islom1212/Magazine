export function ProfileSendVideo() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[15px]">
          <div className="flex gap-[23px]">
            <div className="flex flex-col gap-[5px]">
              <p>Title</p>
              <input className="h-[35px] w-[470px] rounded-[12px] bg-[#f5f5f5] px-2" type="text" />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p>Add Tags</p>
              <input className="h-[35px] w-[470px] rounded-[12px] bg-[#f5f5f5] px-2" type="text" />
            </div>
          </div>

          <p>Explanation</p>
          <div className="flex flex-col gap-[15px] rounded-[12px] p-4 pt-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <div className="flex gap-[15px]">
              {["image", "color", "text", "align", "link"].map(item => (
                <button
                  key={item}
                  className="flex h-[35px] items-center gap-[3px] rounded-[12px] bg-[#F5F5F5] px-[10px] transition hover:bg-[#F0F0F0] hover:shadow-sm"
                >
                  <img className="h-[16px] w-[16px]" src={`/svgs/${item}-svg.svg`} alt={item} />
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <textarea
              className="h-[350px] w-full resize-none rounded-[12px] bg-[#f5f5f5] p-4 text-start"
              placeholder="Type..."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <p>Add Video</p>
          <div className="flex h-[320px] w-[320px] flex-col items-center justify-center gap-[20px] bg-[#f5f5f5]">
            <img className="h-[96px] w-[120px]" src="/svgs/video.svg" alt="video" />
            <p className="text-[#3E3232BF]">Drop video here, paste or</p>
            <button className="flex h-[40px] w-[104px] items-center justify-center gap-[6px] rounded-[12px] border border-gray-400 text-[#3E3232BF] transition hover:border-[#F81539] hover:shadow-sm">
              <img src="/svgs/plus.svg" alt="plus" />
              Select
            </button>
          </div>

          <div className="flex justify-between">
            <button className="flex h-[35px] items-center gap-[6px] rounded-[12px] bg-[#F5F5F5] px-[10px] transition hover:bg-[#F0F0F0] hover:shadow-sm">
              <img className="h-[16px] w-[16px]" src="./svgs/link-svg.svg" alt="link" />
              Draft
            </button>
            <button className="flex h-[35px] items-center gap-[6px] rounded-[12px] bg-[#F5F5F5] px-[10px] transition hover:bg-[#F0F0F0] hover:shadow-sm">
              <img className="h-[16px] w-[16px]" src="./svgs/link-svg.svg" alt="link" />
              Preview
            </button>
            <button className="flex h-[35px] items-center gap-[6px] rounded-[12px] bg-[#F81539BF] px-[10px] text-white transition hover:bg-[#f8183f] hover:shadow-md">
              <img className="h-[16px] w-[16px]" src="/svgs/public.svg" alt="public" />
              Public
            </button>
          </div>
        </div>
      </div>
      <p>Image Gallery</p>
      <div className="flex w-[980px] items-center justify-center gap-[15px] rounded-[12px] p-4 pt-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
        <div className="flex h-[319px] w-[319px] flex-col items-center justify-center gap-[20px] bg-[#f5f5f5]">
          <img className="h-[96px] w-[120px]" src="/svgs/image-svg-2.svg" alt="image" />
          <p className="text-[#3E3232BF]">Drop image here, paste or</p>
          <button className="flex h-[40px] w-[104px] items-center justify-center gap-[6px] rounded-[12px] border border-gray-400 text-[#3E3232BF] transition hover:border-[#F81539] hover:shadow-sm">
            <img src="/svgs/plus.svg" alt="plus" />
            Select
          </button>
        </div>
        <div className="flex w-[730px] flex-wrap gap-[17px]">
          <img className="h-[115px] w-[115px]" src="/svgs/dog.svg" alt="dog" />
          <img className="h-[115px] w-[115px]" src="/svgs/delete.svg" alt="delete" />
          <img className="h-[115px] w-[115px]" src="/svgs/pc-image.svg" alt="pc-image" />
          <img className="h-[115px] w-[115px]" src="/svgs/pc-image.svg" alt="pc-image" />
          <img className="h-[115px] w-[115px]" src="/svgs/pc-image.svg" alt="pc-image" />
          <img className="h-[115px] w-[115px]" src="/svgs/pc-image.svg" alt="pc-image" />
          <img className="h-[115px] w-[115px]" src="/svgs/pc-image.svg" alt="pc-image" />
          <img className="h-[115px] w-[115px]" src="/svgs/pc-image.svg" alt="pc-image" />
          <img className="h-[115px] w-[115px]" src="/svgs/pc-image.svg" alt="pc-image" />
          <img className="h-[115px] w-[115px]" src="/svgs/pc-image.svg" alt="pc-image" />
        </div>
      </div>
    </div>
  );
}
