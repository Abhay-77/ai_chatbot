import { fetchFilteredHistory } from "../lib/data";
import { historyItems } from "../lib/definitions";
import SearchBar from "./SearchBar";
import { Suspense } from "react";
import { FaPowerOff } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signout } from "@/app/lib/actions";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";

const SideNav = async ({ query }: { query: string }) => {
  const historyItems: historyItems = await fetchFilteredHistory(query);
  return (
    <>
      {/* <SidebarProvider> */}
      <nav className="md:flex hidden flex-col gap-5 h-screen p-5 shadow-sm shadow-white ">
        <div className="">
          <Suspense>
            <SearchBar />
          </Suspense>
        </div>
        <div className="flex flex-col overflow-y-auto h-full ">
          {historyItems ? (
            historyItems?.map((item) => (
              <div
                className=" hover:bg-gray-700 rounded-sm h-8 p-1 text-gray-400 hover:text-gray-200"
                key={item.id}
              >
                {item.title}
              </div>
            ))
          ) : (
            <p>{"Failed to fetch history"}</p>
          )}
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
      {/* <SidebarTrigger />
      </SidebarProvider> */}
    </>
  );
};

export default SideNav;

export const Sidenav = async ({ query }: { query: string }) => {
  const historyItems: historyItems = await fetchFilteredHistory(query);
  return (
    <Sidebar className="block md:hidden bg-black">
      <SidebarHeader>
        <Suspense>
          <SearchBar />
        </Suspense>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-300 text-md">
            History
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {historyItems ? (
                historyItems?.map((item) => (
                  <div
                    className=" hover:bg-gray-700 rounded-sm h-8 p-1 text-gray-400 hover:text-gray-200"
                    key={item.id}
                  >
                    {item.title}
                  </div>
                ))
              ) : (
                <p>{"Failed to fetch history"}</p>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
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
      </SidebarFooter>
    </Sidebar>
  );
};
