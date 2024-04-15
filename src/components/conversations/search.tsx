"use client";

import SearchIcon from "@/assets/svg/search";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <label className="relative flex flex-1 flex-shrink-0">
      <input
        className="block w-full rounded-sm outline-0 ring-0 border border-[#CFD3D4] py-2 pl-10 text-base text-black placeholder:text-[#ABAFB1]"
        placeholder={"Search"}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <span className="absolute left-4 top-2.5 bottom-2">
        <SearchIcon />
      </span>
    </label>
  );
}
