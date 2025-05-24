type Props = {
  children: React.ReactNode;
};
export default function DivContainer({ children }: Props) {
  return (
    <>
      <div className="w-[62.5vw] max-w-[1200px] aspect-[10/9] bg-gray-100 mx-auto">
        {children}
      </div>
    </>
  );
}
