export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[856px] px-3 md:px-6">{children}</div>;
}
