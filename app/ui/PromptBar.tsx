import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { addHistory } from "../lib/actions";
import { auth } from "@/auth";

const PromptBar = async () => {
  const session = await auth();
  const email = session?.user?.email;
  const addHistoryWithEmail = addHistory.bind(null,email!);
  return (
    <>
      <div className="relative bg-gray-800 rounded-lg">
        <form action={addHistoryWithEmail}>
          <Textarea
            className="border-none max-h-32 text-wrap w-[95%] text-gray-300 focus:outline-none focus:ring-0 focus-visible:ring-0"
            placeholder="Type something here"
            name="title"
          />
          <Button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-inherit"
            variant="outline"
            size="icon"
          >
            <FaArrowRight />
          </Button>
        </form>
      </div>
    </>
  );
};

export default PromptBar;
