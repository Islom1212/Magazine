import { Loader2Icon } from "lucide-react";

export function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <img src="/public/svgs/logo.svg" alt="" />
        <Loader2Icon className="animate-spin size-10 text-[#FC4308]" />
      </div>
    </div>
  );
}
