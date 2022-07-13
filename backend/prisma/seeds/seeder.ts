import { PrismaClient } from '@prisma/client';


export async function seedDb(prisma: PrismaClient, isDev: boolean): Promise<void> {
  // await Promise.all(
  //   devices.map(async (user) => .device.create(user)),
  // );
}

export async function clearDb(prisma: PrismaClient, isDev: boolean): Promise<void> {
  // await prisma.user.deleteMany({});
}