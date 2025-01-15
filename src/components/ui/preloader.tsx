export const Preloader: React.FC = (): React.ReactElement => {
  return (
    <div className="w-full min-h-svh bg-background flex justify-center items-center">
      <p className="text-foreground text-xl">Загрузка...</p>
    </div>
  );
};
