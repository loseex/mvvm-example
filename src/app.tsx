import { lazy, Suspense } from "react";

const TodosView = lazy(() => import("@/views/todos.view"));

export const App: React.FC = (): React.ReactElement => {
  return (
    <Suspense>
      <TodosView />
    </Suspense>
  );
};
