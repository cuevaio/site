"use client";

import { useCollecty } from "@/hooks/use-collecty";

export function CollectyWidget({ widgetId }: { widgetId: string }) {
  useCollecty(widgetId);
  return null;
}
