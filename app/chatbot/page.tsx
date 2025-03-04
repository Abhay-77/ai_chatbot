import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import ChatBotBox from "./ChatBotBox";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const params = await searchParams;
  const query = params.query;
  return (
      <div className="flex h-screen overflow-hidden bg-black text-white">
        <div className="w-auto md:w-64">
          <SidebarProvider>
            <AppSidebar query={query} />
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
          </SidebarProvider>
        </div>
        <div className="flex flex-col flex-grow p-6 md:overflow-y-auto md:p-12">
          <ChatBotBox />
        </div>
      </div>
  );
};

export default Page;
