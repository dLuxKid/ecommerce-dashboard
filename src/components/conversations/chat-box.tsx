import Image from "next/image";

import dp from "@/assets/imgs/chat1.png";
import iphone1 from "@/assets/imgs/iphone1.png";

import OrderBag from "@/assets/svg/order-bag";
import Tick from "@/assets/svg/tick";
import Plus from "@/assets/svg/plus-icon";
import Emoji from "@/assets/svg/emoji";
import Send from "@/assets/svg/send";
import GoBack from "@/assets/svg/go-back";

export default function ChatBox({ unClickChat }: { unClickChat?: () => void }) {
  return (
    <>
      <div className="border-b border-b-[#F1F3F9] w-full py-4 px-4 md:px-[22px] relative">
        <span
          className="nav:hidden absolute top-4 left-4"
          onClick={unClickChat}
        >
          <GoBack />
        </span>
        <div className="flex items-center flex-wrap nav:flex-nowrap gap-2 md:gap-3.5 w-full mt-6 nav:mt-0">
          <Image
            src={dp}
            alt="profile photo"
            className="size-[60px] object-cover rounded-sm border border-[#F1F3F9]"
          />
          <div className="flex flex-col justify-between gap-2 w-full">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-sm md:text-base font-medium text-black self-start">
                Jane Doe
              </p>

              <div className="flex items-center justify-start flex-wrap gap-x-3.5 gap-y-2 text-black-sec">
                <p className="py-0.5 px-2 rounded-sm bg-[#FEF5EA] text-[#1C1D22] text-xs">
                  New Customer
                </p>
                <p className="text-primary text-xs md:text-sm hover:underline cursor-pointer">
                  View Profile
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap">
              <div className="flex items-center justify-center flex-wrap gap-3.5">
                <p className="text-[#B6BFE8] text-xs flex items-center gap-1">
                  <span className="bg-primary size-3 rounded-full" />
                  Online
                </p>
                <p className="text-[#8B8D97] text-sm">12:55 am</p>
              </div>

              <div className="flex items-center justify-center gap-3.5">
                <span>
                  <OrderBag />
                </span>
                <p className="text-[#A6A8B1] text-sm">0 orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 md:px-[30px] w-full">
        <div className="flex flex-col items-stretch gap-5 w-full">
          <div className="flex items-center justify-center w-full">
            <p className="bg-[#F4F5FA] py-2 px-3 rounded-sm text-[#1C1D22] text-xs md:text-sm">
              12 August 2022
            </p>
          </div>
          <div className="flex gap-1.5 md:gap-2 flex-col">
            <div className="pb-3 flex items-center gap-3.5 border-b border-b-[#F1F3F9] md:w-[50%]">
              <div className="size-[49px] rounded-sm overflow-hidden">
                <Image
                  src={iphone1}
                  alt="product image"
                  className="w-full full object-fill object-center"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-2.5 w-full">
                <div className="w-full flex justify-between">
                  <p className="text-black font-normal text-xs md:font-sm">
                    iPhone 13
                  </p>
                </div>
                <div className="w-full flex justify-between gap-y-2 flex-wrap">
                  <p className="text-black font-medium text-xs md:font-sm">
                    ₦730,000.00
                  </p>
                  <p className="text-[#B6BFE8] text-xs font-medium">
                    <span className="text-primary">12</span> in stock
                  </p>
                </div>
              </div>
            </div>
            <p className="bg-primary p-4 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl text-white text-sm md:text-base md:w-[50%]">
              Hello, I want to make enquiries about your product
            </p>
            <p className="text-sm md:text-base text-[#8B8D97]">12:55 am</p>
          </div>
          <div className="flex gap-1.5 md:gap-2 flex-col">
            <p className="bg-[#FFEAD1] p-4 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl text-black text-sm md:text-base md:w-[50%] self-end">
              Hello Janet, thank you for reaching out.
            </p>
            <p className="text-sm md:text-base text-[#8B8D97] self-end flex items-center gap-1">
              12:57 am
              <span className="size-5 flex items-center justify-center rounded-full bg-[#FFEAD1]">
                <Tick />
              </span>
            </p>
          </div>
          <div className="flex gap-1.5 md:gap-2 flex-col">
            <p className="bg-[#FFEAD1] p-4 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl text-black text-sm md:text-base md:w-[50%] self-end">
              What do you need to know?
            </p>
            <p className="text-sm md:text-base text-[#8B8D97] self-end flex items-center gap-1">
              12:57 am
              <span className="size-5 flex items-center justify-center rounded-full bg-[#FFEAD1]">
                <Tick />
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <p className="bg-[#F4F5FA] py-2 px-3 rounded-sm text-[#1C1D22] text-xs md:text-sm">
              Today
            </p>
          </div>
          <div className="flex gap-1.5 md:gap-2 flex-col">
            <p className="bg-primary p-4 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl text-white text-sm md:text-base md:w-[50%]">
              I want to know if the price is negotiable, i need about 2 units
            </p>
            <p className="text-base text-[#8B8D97]">12:55 pm</p>
          </div>
          <label className="relative w-full flex-1 flex-shrink-0 h-[51px] rounded-sm border border-[#E1E2E9] flex flex-wrap sm:flex-nowrap sm:items-center py-1 px-2 nav:py-2.5 nav:px-3.5 gap-2 md:gap-5">
            <span className="order-1 sm:order-0">
              <Plus />
            </span>
            <input
              className="block size-full bg-transparent outline-0 ring-0 text-base text-black placeholder:text-[#6E7079] order-0 sm:order-1"
              placeholder="Your message"
            />

            <span className="order-2 my-auto">
              <Emoji />
            </span>

            <button className="bg-[#FFF2E2] order-3 py-1 px-2 md:py-2 md:px-4 rounded-[6px] gap-1 md:gap-2.5 flex items-center text-[#1C1D22] text-base hover:bg-opacity-90 duration-300 transition-all">
              Send
              <span>
                <Send />
              </span>
            </button>
          </label>
        </div>
      </div>
    </>
  );
}
