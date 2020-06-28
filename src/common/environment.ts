export const environments = {
  server: { port: process.env.PORT || 3333 },
  db: { url: process.env.MONGO || "mongodb://127.0.0.1:27017/api" },
};
