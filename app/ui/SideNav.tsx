import { fetchFilteredHistory } from "../lib/data";
import { historyItem } from "../lib/definitions";
import SearchBar from "./SearchBar";
import { Suspense } from "react";
import { FaPowerOff } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signout } from "../lib/actions";

const SideNav = async ({query}:{query:string}) => {
  const historyItems: historyItem[] = await fetchFilteredHistory(query);
  return (
    <nav className="flex flex-col gap-5 h-[96vh]">
      <div className="">
        <Suspense>
          <SearchBar />
        </Suspense>
      </div>
      <div className="flex flex-col overflow-y-auto h-full ">
        {historyItems.map((item) => (
          <div
            className=" hover:bg-gray-700 rounded-sm h-8 p-1 text-gray-400 hover:text-gray-200"
            key={item.id}
          >
            {item.title}
          </div>
        ))}
      </div>
      <form action={signout}>
        <Button
        type="submit"
          variant={"ghost"}
          className="w-[60%] text-center flex items-center justify-center gap-3"
        >
          Sign Out
          <FaPowerOff />
        </Button>
      </form>
    </nav>
  );
};

export default SideNav;
