import { Navbar, Footer } from "./index";

export function Contact() {
  return (
    <>
      <Navbar />
      <div className="mx-[80px] mt-[50px] flex flex-col gap-[20px]">
        <div className="flex flex-wrap gap-[15px]">
          <div className="flex flex-col gap-[5px]">
            <p>Subject</p>
            <input className="h-[35px] w-[440px] rounded-[12px] bg-[#f5f5f5] px-2" type="text" />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p>Name</p>
            <input className="h-[35px] w-[440px] rounded-[12px] bg-[#f5f5f5] px-2" type="text" />
          </div>
          <div className="flex flex-col gap-[5px]">
            <p>Email</p>
            <input className="h-[35px] w-[440px] rounded-[12px] bg-[#f5f5f5] px-2" type="text" />
          </div>
        </div>

        <div className="flex gap-[20px]">
          <div className="flex w-fit flex-col gap-[10px]">
            <p>Explanation</p>
            <div className="flex w-[950px] flex-col gap-4 rounded-[12px] p-5 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
              <div className="flex gap-4">
                <button className="flex h-[35px] items-center gap-1 rounded-[12px] bg-[#F5F5F5] px-2 transition hover:bg-gray-200">
                  <img src="/svgs/image-svg.svg" alt="Image" className="h-4 w-4" />
                  Image
                </button>

                <button className="flex h-[35px] items-center gap-1 rounded-[12px] bg-[#F5F5F5] px-2 transition hover:bg-gray-200">
                  <img src="/svgs/color-svg.svg" alt="Color" className="h-4 w-4" />
                  Color
                </button>

                <button className="flex h-[35px] items-center gap-1 rounded-[12px] bg-[#F5F5F5] px-2 transition hover:bg-gray-200">
                  <img src="/svgs/text-svg.svg" alt="Text" className="h-4 w-4" />
                  Text
                </button>

                <button className="flex h-[35px] items-center gap-1 rounded-[12px] bg-[#F5F5F5] px-2 transition hover:bg-gray-200">
                  <img src="/svgs/align-svg.svg" alt="Align" className="h-4 w-4" />
                  Align
                </button>

                <button className="flex h-[35px] items-center gap-1 rounded-[12px] bg-[#F5F5F5] px-2 transition hover:bg-gray-200">
                  <img src="/svgs/link-svg.svg" alt="Link" className="h-4 w-4" />
                  Link
                </button>
              </div>

              <textarea
                placeholder="Type..."
                className="h-[350px] w-full resize-none rounded-[12px] bg-[#F5F5F5] p-4 text-sm"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p>Add Image</p>
            <div className="flex h-[435px] w-[380px] flex-col items-center justify-center gap-[20px] rounded-[12px] border-2 border-dashed border-gray-400 bg-[#f5f5f5] transition-all duration-300">
              <img className="h-[96px] w-[120px]" src="/svgs/papka.svg" alt="papka" />
              <p className="text-[#3E3232BF]">Drop image here, paste or</p>
              <button className="flex h-[40px] w-[104px] items-center justify-center gap-[6px] rounded-[12px] border border-gray-400 text-[#3E3232BF] transition hover:border-[#F81539] hover:shadow-sm">
                <img src="/svgs/plus.svg" alt="plus" />
                Select
              </button>
            </div>

            <div className="flex justify-end">
              <button className="flex h-[35px] items-center gap-[6px] rounded-[12px] bg-[#F81539BF] px-[10px] text-white transition hover:bg-[#f8183f] hover:shadow-md">
                <img className="h-[16px] w-[16px]" src="/svgs/public.svg" alt="public" />
                Public
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
