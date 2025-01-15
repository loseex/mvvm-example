const TodosView: React.FC = (): React.ReactElement => {
  return (
    <div className="w-full max-w-6xl min-h-svh mx-auto px-2 pt-7">
      <div className="w-full min-h-svh grid grid-cols-3 gap-4">
        <div className="col-span-2"></div>
        <div className="col-start-3"></div>
      </div>
    </div>
  );
};

export default TodosView;
