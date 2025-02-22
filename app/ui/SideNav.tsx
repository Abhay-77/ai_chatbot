import { fetchFilteredHistory, historyItem } from "../lib/data";
import SearchBar from "./SearchBar";
import { Suspense } from "react";

const SideNav = async () => {
  const historyItems: historyItem[] = await fetchFilteredHistory();
  return (
    <nav className="flex flex-col gap-5 h-screen">
      <div className="">
        <Suspense>
          <SearchBar />
        </Suspense>
      </div>
      <div className="flex flex-col overflow-y-auto h-full ">
        {historyItems.map((item) => (
          <div
            className=" hover:bg-gray-700 rounded-sm h-8 p-1 text-gray-400 hover:text-gray-200"
            key={item.name}
          >
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
