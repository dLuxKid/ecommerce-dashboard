"use client";

import Conversations from "@/assets/svg/conversations";
import Customers from "@/assets/svg/customers";
import Dashboard from "@/assets/svg/dashboard";
import GiftBox from "@/assets/svg/gift-box";
import Headphone from "@/assets/svg/headphone";
import Inventory from "@/assets/svg/inventory";
import Logo from "@/assets/svg/logo";
import Orders from "@/assets/svg/orders";
import RedDoor from "@/assets/svg/red-door";
import RightArrow from "@/assets/svg/right-arrow";
import Settings from "@/assets/svg/settings";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { toast } from "sonner";

const nav_items = [
  { icon: Dashboard, item: "Dashboard", href: "/" },
  { icon: Orders, item: "Orders", href: "/orders", msg: 3 },
  { icon: Customers, item: "Customers", href: "/customers" },
  { icon: Inventory, item: "Inventory", href: "/inventory" },
  {
    icon: Conversations,
    item: "Conversations",
    href: "/conversations",
    msg: 16,
  },
  { icon: Settings, item: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={`w-[88px] nav:w-[296px] overflow-auto duration-300 bg-white z-50 fixed h-full`}
    >
      <div className="flex justify-between flex-col min-h-screen h-full px-4 nav:px-8 w-full">
        <div className="flex flex-col items-center justify-center gap-[62px] mt-[14px] w-full">
          <div className="flex items-center gap-4 self-start">
            <span>
              <Logo />
            </span>
            <h3 className="text-black font-bold text-xl leading-[30px] hidden nav:block">
              Metrix
            </h3>
          </div>
          <ul className="flex flex-col gap-4 nav:gap-6 justify-center w-full">
            {nav_items.map((link, i) => (
              <Link href={link.href} key={i}>
                <li
                  key={i}
                  className={`flex items-center justify-center nav:justify-start rounded-lg gap-4 nav:pl-5 duration-300 transition-all ease-in-out group relative ${
                    pathname === link.href
                      ? "bg-primary p-3 nav:px-5 nav:py-4"
                      : ""
                  }`}
                >
                  <span>
                    {
                      <link.icon
                        color={pathname === link.href ? "#ffffff" : "#53545C"}
                      />
                    }
                  </span>
                  <p
                    className={`text-sm font-normal hidden nav:block ${
                      pathname === link.href
                        ? "text-white"
                        : "text-black-sec group-hover:text-primary"
                    } `}
                  >
                    {link.item}
                  </p>
                  {link.msg && (
                    <>
                      <span className="bg-[#FFCC91] size-6 flex items-center justify-center rounded-full text-xs text-[#1C1D22] nav:hidden absolute -top-2 -right-1">
                        {link.msg}
                      </span>
                      <span className="bg-[#FFCC91] size-6 hidden nav:flex items-center justify-center rounded-full text-xs text-[#1C1D22]">
                        {link.msg}
                      </span>
                    </>
                  )}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 mb-4">
          <div className="py-[11px] px-4 rounded-2xl bg-[#5E63661A] w-full cursor-pointer">
            <p className="flex items-center gap-3 text-[#1C1D22] text-sm">
              <span>
                <Headphone />
              </span>
              <span className="hidden nav:block">Contact Support</span>
            </p>
          </div>
          <div className="py-[11px] px-5 rounded-2xl flex flex-col bg-[#FFCC9133] gap-4 w-full cursor-pointer">
            <p className="flex items-center gap-3 text-sm text-[#000000]">
              <span>
                <GiftBox />
              </span>
              <span className="hidden nav:block">Free Gift Awaits You!</span>
            </p>
            <p className="items-center justify-between md:w-40 text-xs text-[#6E7079] hidden nav:flex cursor-pointer">
              Upgrade your account
              <span>
                <RightArrow />
              </span>
            </p>
          </div>
          <div
            className="flex w-full gap-2 py-[11px] px-4 cursor-pointer hover:bg-[#CC5F5F]/10 rounded-2xl"
            onClick={() => toast("logout successful")}
          >
            <span>
              <RedDoor />
            </span>
            <p className="text-[#CC5F5F] font-sm font-normal hidden nav:block">
              Logout
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
