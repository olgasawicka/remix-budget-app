import bcrypt from 'bcryptjs';
import type { User } from '@prisma/client';
import { prisma } from './prisma.server';
import { CustomError } from './types';

export type { User } from '@prisma/client';

export async function getUserByEmail(email: User['email']) {
  return prisma.user.findUnique({ where: { email } });
}

export async function getUserById(id: User['id']) {
  return prisma.user.findUnique({ where: { id } });
}

export async function createUser(inputData: { [k: string]: string }) {
  const existingUser = await getUserByEmail(inputData.email);
  if (existingUser) {
    throw new CustomError(
      'UserExists',
      422,
      'User already exists with provided email address.'
    );
  }

  const hashedPassword = await bcrypt.hash(inputData.password, 10);

  await prisma.user.create({
    data: {
      username: inputData.username,
      email: inputData.email,
      password: hashedPassword,
    },
  });
}
