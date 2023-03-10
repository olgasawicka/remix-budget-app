import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import Authentication from '~/components/Authentication';
import { createUser } from '~/utils/user.server';
import { validateInputs } from '~/utils/validation';

export default function AuthenticationPage() {
  return <Authentication />;
}

export async function action({ request }: ActionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';
  const formData = await request.formData();
  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const credentials = Object.fromEntries(formData);

  try {
    validateInputs(credentials);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === 'login') {
      // Login user
    } else {
      await createUser({ username, email, password });
      return redirect('/');
    }
  } catch (error) {
    return error;
  }
}
