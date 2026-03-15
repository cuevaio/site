"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    CollectyWidget?: string;
    collecty?: {
      q?: unknown[];
      (...args: unknown[]): void;
    };
  }
}

export function useCollecty(widgetId: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize collecty function if not already defined
    if (!window.collecty) {
      const collectyFn = (...args: unknown[]) => {
        const q = collectyFn.q || [];
        q.push(args);
        collectyFn.q = q;
      };
      collectyFn.q = [] as unknown[];
      window.collecty = collectyFn;
    }

    window.CollectyWidget = "collecty";

    // Create and inject the script
    const script = document.createElement("script");
    script.id = "collecty";
    script.src = `https://collecty-production.up.railway.app/widget/${widgetId}/widget.js`;
    script.async = true;

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    // Initialize with widget ID
    if (window.collecty) {
      window.collecty("init", widgetId);
    }

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById("collecty");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [widgetId]);
}
