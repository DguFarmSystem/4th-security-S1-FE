type Props = {
  children: React.ReactNode;
};
export default function DivContainer({ children }: Props) {
  return (
    <>
      <div className="flex items-center justify-center w-1/3 bg-zinc-100 pb-[90vh] ml-[33vw]">
        {children}
      </div>
    </>
  );
}
