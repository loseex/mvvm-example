import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { Todo } from "@/models/todo.model";
import todoStore from "@/stores/todo.store";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

export const TodoInput: React.FC = (): React.ReactElement => {
  const initialState: Todo = {
    title: "",
    description: "",
    important: false,
  };

  const [state, setState] = useState<Todo>(initialState);

  const changeTitle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, title: ev.target.value }));
  };

  const changeDesc = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((prev) => ({ ...prev, description: ev.target.value }));
  };

  const changeImportant = () => {
    setState((prev) => ({ ...prev, important: !prev.important }));
  };

  const create = (): void => {
    todoStore.create(state);
    setState(initialState);
  };

  const clear = (): void => {
    todoStore.clear();
  };

  const disable = state.title.length <= 0;

  return (
    <Card className="w-full shadow-none">
      <CardHeader>
        <CardTitle children={"Добавить задачу"} />
        <CardDescription
          children={"Укажите необходимую информацию для создания задачи"}
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Input
          value={state.title}
          onChange={changeTitle}
          placeholder="Введите название"
        />
        <Textarea
          value={state.description}
          onChange={changeDesc}
          placeholder="Введите описание"
        />
        <hr />
        <div className="flex flex-row justify-between items-center">
          <Label htmlFor="important">Пометить как важное?</Label>
          <Switch
            id="important"
            checked={state.important}
            onClick={changeImportant}
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex flex-col gap-1">
          <Button disabled={disable} className="w-full" onClick={create}>
            <PlusIcon className="fill-white" />
            <span>Создать</span>
          </Button>
          <hr />
          <Button variant={"secondary"} className="w-full" onClick={clear}>
            <span>Очистить</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
