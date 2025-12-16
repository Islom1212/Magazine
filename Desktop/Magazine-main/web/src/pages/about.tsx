import { Navbar, Footer } from "./index";

export function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-[70px]">
        <div className="mx-[75px] mt-[30px] flex flex-col gap-[20px] bg-[#f5f5f5] p-[32px]">
          <p className="text-[32px]">We pay attention to your needs and do the best design.</p>
          <div className="flex gap-[30px]">
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
              aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi
              tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus
              et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare
              massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed
              enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non
              nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim
              blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat.
            </p>
            <img src="/svgs/video.png" alt="video" />
          </div>
        </div>
        <div className="flex gap-[40px]">
          <img className="w-[960px]" src="/svgs/map.png" alt="map" />
          <div className="flex flex-col gap-[30px]">
            <p className="text-[20px] font-bold">Mega News Information</p>
            <div className="flex items-center gap-[7px]">
              <img src="/svgs/email.svg" alt="email" />
              <p className="text-[13px]">Email : Management@Mega.News</p>
            </div>

            <div className="flex items-center gap-[7px]">
              <img src="/svgs/phone-2.svg" alt="phone" />
              <p className="text-[13px]">Phone number : +1(234) 567-8910</p>
            </div>

            <div className="flex items-center gap-[7px]">
              <img src="/svgs/fax.svg" alt="fax" />
              <p className="text-[13px]">fax : +1(234) 567-8910</p>
            </div>

            <div className="flex items-center gap-[7px]">
              <img src="/svgs/address.svg" alt="address" />
              <p className="text-[13px]">Address : 1234 Foxrun St.New Lenox, IL 123456</p>
            </div>

            <div className="flex items-center gap-[7px] rounded-[12px] bg-[#f5f5f5] px-[22px] py-[10px]">
              <img src="/svgs/hours.svg" alt="hours" />
              <p className="text-[13px]">Responding 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>
        <div className="mx-[75px] flex flex-col gap-[20px]">
          <p className="text-[20px] font-bold">Mega News Team</p>
          <div className="flex gap-[30px]">
            <div className="flex flex-col items-center justify-center gap-[10px] rounded-[12px] p-6 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
              <img src="/svgs/behzad.svg" alt="Behzad" />
              <p>Designer</p>
              <button className="rounded-[12px] bg-[#f5f5f5] px-[20px] py-[6px] text-[16px]">Behzad Pashaei</button>
            </div>

            <div className="flex flex-col items-center justify-center gap-[10px] rounded-[12px] p-7 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
              <img src="/svgs/cassie.svg" alt="Cassie" />
              <p>Programmer</p>
              <button className="rounded-[12px] bg-[#f5f5f5] px-[20px] py-[6px] text-[16px]">Cassie Evans</button>
            </div>

            <div className="flex flex-col items-center justify-center gap-[10px] rounded-[12px] p-7 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
              <img src="/svgs/louis-2.svg" alt="Louis" />
              <p>Marketing</p>
              <button className="rounded-[12px] bg-[#f5f5f5] px-[20px] py-[6px] text-[16px]">Louis Hoebregts</button>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] rounded-[12px] p-8 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
              <img src="/svgs/patricia.svg" alt="Patricia" />
              <p>administrative</p>
              <button className="rounded-[12px] bg-[#f5f5f5] px-[20px] py-[6px] text-[16px]">Patricia</button>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] rounded-[12px] p-7 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
              <img src="/svgs/james-2.svg" alt="James" />
              <p>CEO</p>
              <button className="rounded-[12px] bg-[#f5f5f5] px-[20px] py-[6px] text-[16px]">James Hoebregts</button>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] rounded-[12px] p-7 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
              <img src="/svgs/jon-2.svg" alt="Jon" />
              <p>Financial</p>
              <button className="rounded-[12px] bg-[#f5f5f5] px-[20px] py-[6px] text-[16px]">Jon Kantner</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
