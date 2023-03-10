import type { CustomError, ValidationErrors } from '~/utils/types';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from '@remix-run/react';
import Section from './Section';
import FormField from './FormField';
import { EyeIcon } from './Icons';
import type { action } from '~/routes/authentication';

const Authentication = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [inputType, setInputType] = useState('password');

  const [searchParams] = useSearchParams();
  const authMode = searchParams.get('mode') || 'login';

  const submitBtnCaption = authMode === 'login' ? 'Sign in' : 'Sign up';
  const toggleBtnCaption =
    authMode === 'login' ? 'Create a new user' : 'I have an account';

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== 'idle';

  const actionData = useActionData<
    typeof action | ValidationErrors | CustomError
  >();

  const usernameRef = useRef<null | HTMLInputElement>(null);
  const emailRef = useRef<null | HTMLInputElement>(null);
  const passwordRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (actionData && actionData['statusCode'] === 422) {
      setFormData({ username: formData.username, email: '', password: '' });
    }
  }, [actionData]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => {
      return { ...form, [field]: event.target.value };
    });
  };

  return (
    <Section>
      <Form
        className="w-full max-w-xl py-10 px-10 bg-stone-200 flex flex-col justify-center rounded"
        method="post"
      >
        <div className="w-full text-center mb-10 text-gray-900">
          <h1 className="font-bold text-3xl">
            {authMode === 'login' ? 'Sign in' : 'Sign up'}
          </h1>
          <p className="mt-4 text-small">
            {authMode === 'login'
              ? 'Enter your information to sign in to your account'
              : 'Fill in the form below to create a new account.'}
          </p>
        </div>
        {authMode === 'signup' && (
          <>
            <FormField
              innerRef={usernameRef}
              htmlFor="username"
              label="User name"
              value={formData.username}
              placeholder="John Smith"
              onChange={(event) => handleInputChange(event, 'username')}
              withAutocomplete
              errorResponse={actionData && actionData['username']}
            />
          </>
        )}
        <FormField
          innerRef={emailRef}
          htmlFor="email"
          label="Email address"
          value={formData.email}
          placeholder="johnsmith@example.com"
          onChange={(event) => handleInputChange(event, 'email')}
          withAutocomplete
          errorResponse={actionData && actionData['email']}
        />
        <FormField
          innerRef={passwordRef}
          htmlFor="password"
          label="Password"
          type={inputType}
          value={formData.password}
          onChange={(event) => handleInputChange(event, 'password')}
          placeholder="************"
          icon={EyeIcon}
          onIconToggle={(e) => {
            e.preventDefault();
            setInputType(inputType === 'password' ? 'text' : 'password');
          }}
          errorResponse={actionData && actionData['password']}
        />
        {actionData && actionData['statusCode'] === 422 && (
          <div className="text-red-700">{actionData['message']}</div>
        )}
        <button
          type="submit"
          className="block w-auto mx-auto bg-cyan-600 hover:bg-cyan-700 focus:bg-cyan-700 disabled:bg-gray-300 disabled:text-gray-500 rounded-lg py-3 px-10 mt-5 font-semibold"
          disabled={isSubmitting || !formData.email || !formData.password}
        >
          {isSubmitting
            ? authMode === 'login'
              ? 'Authenticating...'
              : 'Creating new account...'
            : submitBtnCaption}
        </button>
        <div className="w-full text-center flex justify-center mt-6">
          <Link
            to={authMode === 'login' ? '?mode=signup' : '?mode=login'}
            className="text-gray-900"
          >
            {toggleBtnCaption}
          </Link>
        </div>
      </Form>
    </Section>
  );
};

export default React.forwardRef(Authentication);
