"use client";
import search from "@/assets/icons/search.svg";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
        if(query){
            // Apply search function
        }
    }, 300)
  }, [query]);

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
      <img src={search} alt="search" width={24} height={24} />
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-1 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus-border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;
