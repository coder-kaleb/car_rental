"use client";

import { Provider } from "@/types";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }: Provider) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
