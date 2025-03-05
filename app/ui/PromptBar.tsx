import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { ChangeEvent } from "react";

const PromptBar: React.FC<{
  setInput: (value: string) => void;
  prompt: string;
  onClick: () => void;
}> = ({ setInput, prompt, onClick }) => {
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="relative bg-gray-800 rounded-lg">
        {/* <form action=""> */}
        <Textarea
          className="border-none max-h-32 text-wrap w-[95%] text-gray-300 focus:outline-none focus:ring-0 focus-visible:ring-0"
          placeholder="Type something here"
          name="title"
          value={prompt}
          onChange={handleChange}
        />
        <Button
          // type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-inherit"
          variant="outline"
          size="icon"
          onClick={onClick}
        >
          <FaArrowRight />
        </Button>
        {/* </form> */}
      </div>
    </>
  );
};

export default PromptBar;
