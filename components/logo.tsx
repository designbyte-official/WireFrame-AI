"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants/app";

export function Logo({
  className,
  iconClassName,
  showName = true
}: {
  className?: string,
  iconClassName?: string,
  showName?: boolean
}) {
  return (
    <Link href="/" className="flex items-center gap-3 group cursor-pointer h-full">
      <div className={cn(`relative flex items-center justify-center -ml-2 rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3`, className)}>
        <img src="/logo.svg" alt="Poeru Logo" className={cn("size-8 md:size-9 shadow-[0_4px_20px_rgba(59,21,255,0.4)] rounded-xl border border-white/10 dark:border-white/20", iconClassName)} />
      </div>

      {showName && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter text-foreground transition-colors group-hover:text-primary">
            {APP_NAME}<span className="text-primary">.</span>
          </span>
        </div>
      )}
    </Link>
  );
}
