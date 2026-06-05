interface PageTitleProps {
  title: string;
  subtitle: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-[0.5px] text-text-primary">
        {title}
      </h1>
      <p className="text-sm text-text-primary mt-1 max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
}
