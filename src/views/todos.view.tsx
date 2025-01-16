import { TodoInput } from "@/components/todo-input";
import { TodoList } from "@/components/todo-list";

const TodosView: React.FC = (): React.ReactElement => {
  return (
    <div className="w-full max-w-6xl min-h-svh mx-auto px-2 pt-7">
      <div className="w-full sm:min-h-svh sm:grid sm:grid-cols-3 gap-4 flex flex-col-reverse">
        <div className="col-span-2">
          <TodoList />
        </div>
        <div className="col-start-3">
          <TodoInput />
        </div>
      </div>
    </div>
  );
};

export default TodosView;
