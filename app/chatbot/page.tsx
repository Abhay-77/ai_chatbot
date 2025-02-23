import SideNav from "../ui/SideNav";
import PromptBar from '../ui/PromptBar'

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const params = await searchParams;
  const query = params.query;
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-black text-white">
      <div className="w-full flex-none md:w-64 shadow-sm shadow-white p-3">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <PromptBar />
      </div>
    </div>
  );
};

export default Page;
