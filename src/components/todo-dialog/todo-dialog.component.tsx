import { Todo } from "@/models/todo.model";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export type TodoDialogProps = {
  children: React.ReactNode;
  data: Todo;
};

export const TodoDialog: React.FC<TodoDialogProps> = (
  props
): React.ReactElement => {
  return (
    <Dialog>
      <DialogTrigger className="w-full text-start">
        {props.children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">{props.data.title}</DialogTitle>
          <pre className="w-full text-sm text-wrap text-gray-500 leading-4">
            {props.data.description}
          </pre>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
