import os from "os";

export function getUptime(): number {
  return os.uptime();
}

console.log(`System Uptime: ${getUptime()}`);
