import clsx from "clsx";

export const TitleHeader = ({ title, className }: { title: String; sub?: string, className?: string }) => {
  return (
    <div className={clsx("flex flex-col items-center gap-5", className)}>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};
