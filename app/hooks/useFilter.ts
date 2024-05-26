"use client";
import { usePathname } from "next/navigation";
import { Filter } from "@/app/models";

export function useFilter(): Filter | undefined {
  const pathname = usePathname();
  if (pathname === "/") return "all";
  if (pathname === "/active") return "active";
  if (pathname === "/completed") return "completed";
}
