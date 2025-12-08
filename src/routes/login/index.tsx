import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/login/")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <>
      <Button onClick={() => toast.success("sukses bang")}>Test Toaster</Button>
    </>
  );
}
