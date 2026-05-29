const requests = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const entry = requests.get(identifier);

  if (!entry || now > entry.resetAt) {
    requests.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count += 1;
  return true;
}
