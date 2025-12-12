import { defineConfig } from "prisma/config";

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});

// import { defineConfig, env } from "prisma/config"
// import path from "node:path"
// import "dotenv/config"

// export default defineConfig({
//   schema: path.join("prisma", "schema.prisma"),
//   datasource: {
//     provider: "mysql",
//     url: env("DATABASE_URL"),
//   },
// })
