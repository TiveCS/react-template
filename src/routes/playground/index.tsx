import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { Calendar } from "@/components/ui/calendar";

export const Route = createFileRoute("/playground/")({
  component: PlaygroundPage,
});

function PlaygroundPage() {
  return (
    <div className="p-8">
      <Calendar
        mode="range"
        className="rounded-md border shadow-sm [--cell-size:--spacing(10.5)]"
        captionLayout="dropdown"
      />
    </div>
  );
}
