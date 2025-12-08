import { createAuthClient } from "better-auth/react";
import { tanstackStartCookies } from "better-auth/tanstack-start";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: import.meta.env.VITE_BACKEND_URL,
  plugins: [tanstackStartCookies()],
});

export type Session = typeof authClient.$Infer.Session;
