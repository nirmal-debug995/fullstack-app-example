module.exports = {
  apps: [
    {
      name: "backend",
      script: "server.js",
      cwd: "./backend",
      env: { NODE_ENV: "production", PORT: 5000 }
    },
    {
      name: "frontend",
      script: "npx",
      args: "serve -s build -l 3000",
      cwd: "./frontend"
    }
  ]
};
