import { lazy, Suspense } from "react";
import { Preloader } from "./components/ui/preloader";

const TodosView = lazy(() => import("@/views/todos.view"));

export const App: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<Preloader />}>
      <TodosView />
    </Suspense>
  );
};
