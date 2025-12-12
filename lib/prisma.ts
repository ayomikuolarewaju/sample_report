import { PrismaClient } from "@prisma/client";
// import { createAdapter } from "@prisma/adapter-mysql";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection(process.env.DATABASE_URL!);
// const adapter = createAdapter(connection);

export const prisma = new PrismaClient({
  // adapter,
  log: ["query", "warn", "error"],
});

// import { PrismaClient } from "@/lib/generated/prisma/client";
// import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
// import { Client } from "@planetscale/database";

// const connection = new Client({
//   url: process.env.DATABASE_URL,
// });

// const adapter = new PrismaPlanetScale(connection);

// const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     adapter,
//     log: ["query", "info", "warn", "error"],
//   });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }
