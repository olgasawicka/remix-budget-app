import bcrypt from 'bcryptjs';
import type { User } from '@prisma/client';
import { prisma } from './prisma.server';

export type { User } from '@prisma/client';

export async function getUserByEmail(email: User['email']) {
  return prisma.user.findUnique({ where: { email } });
}

export async function getUserById(id: User['id']) {
  return prisma.user.findUnique({ where: { id } });
}

export async function createUser(
  username: User['username'],
  email: User['email'],
  password: string
) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
}
