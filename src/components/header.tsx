import Image from "next/image";

import profile from "@/assets/imgs/profile.jpeg";
import Bell from "@/assets/svg/bell";
import ArrowDown from "@/assets/svg/arrow-down";
import Breadcrumbs from "./breadcrumb";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header({ page }: { page: string }) {
  return (
    <>
      <nav className="w-full bg-white py-[14px] px-[21px] sm:h-[60px] flex items-center justify-center">
        <div className="flex flex-wrap gap-4 items-center justify-between w-full">
          <h1 className="capitalize text-base md:text-xl font-medium text-black">
            {page}
          </h1>
          <div className="flex items-center gap-5">
            <div className="flex items-center px-3 py-[5px] rounded-sm bg-[#FEF5EA]">
              <Select>
                <SelectTrigger className="text-black gap-5" color={"#000"}>
                  <SelectValue placeholder="Nancy's shop" />
                </SelectTrigger>
                <SelectContent className="bg-[#FEF5EA]">
                  <SelectItem value="nancy" className="text-black">
                    Nancy&apos;s shop
                  </SelectItem>
                  <SelectItem value="switch" className="text-black">
                    Switch Account
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="cursor-pointer relative group">
              <Bell />
              <div className="hidden group-hover:flex absolute -translate-x-[100px] top-5 items-center justify-center rounded-lg bg-white shadow-sm p-4 max-w-80 max-h-80">
                <p className="text-black text-base font-medium">
                  You have no new notifications
                </p>
              </div>
            </div>
            <div className="size-8 rounded-sm overflow-hidden cursor-pointer">
              <Image
                alt="profile image"
                src={profile}
                className="w-full h-full object-center object-fill"
              />
            </div>
          </div>
        </div>
      </nav>
      <Breadcrumbs path={page} />
    </>
  );
}
