type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[856px] px-3 md:px-6 ${className}`}>
      {children}
    </div>
  );
}
