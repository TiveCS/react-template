import { BugReportForm } from "@/components/form-demo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login/")({
  component: LoginPage,
});

function LoginPage() {
  return <BugReportForm />;
}
