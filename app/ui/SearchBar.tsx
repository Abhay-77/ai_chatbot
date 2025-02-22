"use client";

import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SearchBar =  () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const handleChange = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    }
    else {
        params.delete('query')
    }
    replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="relative w-full">
      <IoSearchOutline
        className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <Input
        className="pl-8"
        placeholder="Search"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};

export default SearchBar;
