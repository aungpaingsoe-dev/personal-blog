"use client";

import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className=" w-full h-screen flex justify-center items-center relative ">
      <div className=" absolute top-5 end-5 ">
        {pathname == "/login" ? (
          <Link isBlock showAnchorIcon color="primary" href="/register">
            Signup
          </Link>
        ) : (
          <Link isBlock showAnchorIcon color="primary" href="/login">
            Login
          </Link>
        )}
      </div>
      <div className=" w-3/12 mx-auto ">{children}</div>
    </div>
  );
}
