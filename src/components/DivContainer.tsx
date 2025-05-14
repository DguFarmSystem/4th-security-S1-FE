type Props = {
  children: React.ReactNode;
};
export default function DivContainer({ children }: Props) {
  return (
    <>
      <div className="bg-red-500">{children}</div>
    </>
  );
}
