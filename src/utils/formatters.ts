/**
 * Truncates a UUID to show first 8 and last 5 characters.
 * Example: "03ca5597-8b2e-4f1a-9c3d-a04457e8f1b2" → "03ca5597...8f1b2"
 */
export function truncateId(id: string): string {
  if (id.length <= 16) return id;
  return `${id.slice(0, 8)}...${id.slice(-5)}`;
}

/**
 * Formats a number with locale-appropriate separators.
 * Example: 1248 → "1,248"
 */
export function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}

/**
 * Formats a large number with k/M suffix.
 * Example: 1200 → "1.2k"
 */
export function formatCompactNumber(value: number): string {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}k`;
  }
  return value.toString();
}
