"use client";
import { FiLogOut } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/react";

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header className="w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent ">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className=" object-contain"
          />
        </Link>

        {!session ? (
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] text-xl font-semibold"
            handleClick={() => signIn("google")}
          />
        ) : (
          <FiLogOut
            onClick={() => signOut()}
            className=" absolute right-3 sm:right-6 w-9 h-9 xl:text-white xl:top-4 top-2 hover:cursor-pointer text-primary-blue"
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
