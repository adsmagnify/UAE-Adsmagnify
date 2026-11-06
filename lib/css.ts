import type { CSSProperties } from "react";

export function css(input: string): CSSProperties {
  const style: Record<string, string> = {};

  for (const part of input.split(";")) {
    const index = part.indexOf(":");
    if (index === -1) continue;

    const raw = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (!raw || !value) continue;

    const key = raw.startsWith("--")
      ? raw
      : raw.replace(/-([a-z])/g, (_, char: string) => char.toUpperCase());

    style[key] = value;
  }

  return style;
}
