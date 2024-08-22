import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import { UserDropDown } from "./UserDropdown";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between ">
      <div className="flex items-center ">
        <Link href={"/"}>
          <h1 className="text-black font-bold lg:text-3xl">
            Emarket<span className=" text-green-700">Dz</span>
          </h1>
        </Link>

        <NavbarLinks />
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            {user.email == process.env.ADMIN_EMAIL ? (
              <>
                {" "}
                <Link
                  href={"/dashboard"}
                  className="group p-2 flex items-center mr-2"
                >
                  <Button variant={"outline"}>Dashboard</Button>
                </Link>
                <Link
                  href={"/bag"}
                  className="group p-2 flex items-center mr-2"
                >
                  <ShoppingBagIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-600" />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 ">
                    5
                  </span>
                </Link>
                <UserDropDown
                  email={user.email as string}
                  name={user.given_name as string}
                  userImage={
                    user.picture ??
                    `https://avatar.vercel.sh/${user.given_name}`
                  }
                />{" "}
              </>
            ) : (
              <>
                {" "}
                <Link
                  href={"/bag"}
                  className="group p-2 flex items-center mr-2"
                >
                  <ShoppingBagIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-600" />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 ">
                    5
                  </span>
                </Link>
                <UserDropDown
                  email={user.email as string}
                  name={user.given_name as string}
                  userImage={
                    user.picture ??
                    `https://avatar.vercel.sh/${user.given_name}`
                  }
                />
              </>
            )}
          </>
        ) : (
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
            {" "}
            <Button asChild>
              <LoginLink>Log in</LoginLink>
            </Button>
            <span className="h-6 w-px bg-gray-200"></span>
            <Button asChild>
              <RegisterLink>Create Account</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
