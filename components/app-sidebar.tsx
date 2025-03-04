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
import { Suspense } from "react";
import SearchBar from "../app/ui/SearchBar";
import { Button } from "./ui/button";
import { FaPowerOff } from "react-icons/fa";
import { signout } from "@/app/lib/actions";
import { fetchFilteredHistory } from "../app/lib/data";
import { historyItems } from "../app/lib/definitions";
import DeleteButton from "@/app/ui/DeleteButton";

export async function AppSidebar({ query }: { query: string }) {
  const historyItems: historyItems = await fetchFilteredHistory(query);
  return (
    <Sidebar className="bg-black">
      <SidebarHeader>
        <Suspense>
          <SearchBar />
        </Suspense>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-300 text-xl font-bold">
            History
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {historyItems ? (
                historyItems?.map((item) => (
                  <div
                    className="flex justify-between items-center hover:bg-gray-700 rounded-sm h-8 p-1 text-gray-400 hover:text-gray-200"
                    key={item.id}
                  >
                    <div className="text-md">{item.title}</div>
                    <DeleteButton id={item.id}/>
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
}
