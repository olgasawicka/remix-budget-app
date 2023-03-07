import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import Authentication from '~/components/Authentication';
import { createUser, getUserByEmail } from '~/utils/user.server';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from '~/utils/validation';

export default function AuthenticationPage() {
  return <Authentication />;
}

export async function action({ request }: ActionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  if (authMode === 'login') {
    //login user
  } else {
    const username = formData.get('username');
    if (!validateUsername(username)) {
      return json(
        {
          errors: {
            username: 'Username must be at least 3 characters long.',
            email: null,
            password: null,
          },
        },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return json(
        {
          errors: {
            username: null,
            email: 'Email is invalid.',
            password: null,
          },
        },
        { status: 400 }
      );
    }

    if (!validatePassword(password)) {
      return json(
        {
          errors: {
            username: null,
            email: null,
            password:
              'Passwords must have at least 8 characters and contain at least one letter and one number',
          },
        },
        { status: 400 }
      );
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return json(
        {
          errors: {
            username: null,
            email: 'A user already exists with this email',
            password: null,
          },
        },
        { status: 400 }
      );
    }

    await createUser(username, email, password);
    return redirect('/');
  }
}
