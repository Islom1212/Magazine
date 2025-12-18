import { Loader2Icon } from "lucide-react";

export function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <img src="/public/svgs/logo.svg" alt="" />
        <Loader2Icon className="size-10 animate-spin text-[#FC4308]" />
      </div>
    </div>
  );
}
