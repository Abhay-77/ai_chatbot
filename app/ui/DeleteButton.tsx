import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { deleteHistoryItem } from "@/app/lib/actions";

const DeleteButton = ({id}:{id:string}) => {
  const deleteHistoryItemWithId = deleteHistoryItem.bind(null,id);
  return (
    <form action={deleteHistoryItemWithId}>
      <Button variant="ghost" className="h-6 w-4">
        <MdDelete />
      </Button>
    </form>
  );
};

export default DeleteButton;
