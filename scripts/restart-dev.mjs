// Daemonized dev-server starter: double-fork so the server survives this process exiting.
// Usage: bun scripts/restart-dev.mjs
const launcher = Bun.spawn(
  ["bash", "-c", "cd /home/z/my-project && nohup bun run dev >> dev.log 2>&1 & disown; exit 0"],
  {
    stdin: "ignore",
    stdout: "ignore",
    stderr: "ignore",
  },
);
launcher.unref();
await launcher.exited;
console.log("dev server detached");
