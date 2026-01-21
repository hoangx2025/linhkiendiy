"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initGA, trackPage } from "@/lib/ga";

export default function GAClient() {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPage(pathname);
  }, [pathname]);

  return null;
}
