"use client";

import React from "react";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export function NextAuthProvider({ children }: SessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
