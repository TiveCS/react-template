import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login/")({
  component: loginPage,
});

function loginPage() {
  return <p>Login Page</p>;
}
