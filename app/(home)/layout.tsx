import { Navbar } from "@/components/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className=" w-[77%] mx-auto mt-5 ">{children}</div>
    </div>
  );
}
