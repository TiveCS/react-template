import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playground/")({
  component: PlaygroundPage,
});

function PlaygroundPage() {
  return <div>Playground Page</div>;
}
