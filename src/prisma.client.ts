import { PrismaClient } from './generated/client';

const prisma = new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
});

export { prisma };
