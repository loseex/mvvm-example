import { Todo } from "@/models/todo.model";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { TodoDialog } from "../todo-dialog";

export const TodoCard: React.FC<Todo> = (props): React.ReactElement => {
  return (
    <TodoDialog data={props}>
      <Card className="shadow-none border-gray-300 hover:bg-gray-50 transition cursor-pointer">
        <CardHeader>
          <CardTitle>
            <span className="mr-2" children={props.title} />
            {props.important && (
              <Badge
                className="bg-yellow-100 text-black border-none shadow-none"
                children={"Важно"}
              />
            )}
          </CardTitle>
          <CardDescription
            className="line-clamp-1"
            children={props.description}
          />
        </CardHeader>
      </Card>
    </TodoDialog>
  );
};
