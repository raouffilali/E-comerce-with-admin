"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
interface buttonProps {
  title: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}
export function SubmitButton({ title, variant }: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className="my-3 h-4 w-4 animate-spin" />
          In progress ...
        </Button>
      ) : (
        <Button variant={variant} type="submit">
          {title}
        </Button>
      )}
    </>
  );
}
