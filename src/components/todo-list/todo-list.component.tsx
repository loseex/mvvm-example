import todoStore from "@/stores/todo.store";
import { TodoCard } from "../todo-card";
import { observer } from "mobx-react";

export const TodoList: React.FC = observer((): React.ReactElement => {
  return (
    <div className="w-full min-h-fit flex flex-col gap-1">
      {todoStore.array.map((el, i) => (
        <TodoCard key={i} {...el} />
      ))}
    </div>
  );
});
