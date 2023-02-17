import type { FC } from 'react';
import { Form } from '@remix-run/react';
import AuthSVG from './AuthSVG';

const Auth: FC = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-cyan-600 py-10 px-10">
            <AuthSVG />
          </div>
          <Form className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-stone-200 flex flex-col justify-center">
            <div className="w-full text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Log in</h1>
              <p>Enter your information to log in to your account</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Email address
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500"
                      placeholder="johnsmith@example.com"
                      id="email"
                      required
                      name="email"
                      autoComplete="email"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold px-1"
                  >
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="password"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500"
                      placeholder="************"
                      id="password"
                      name="password"
                      autoComplete="current-password"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    type="submit"
                    className="block w-full max-w-xs mx-auto bg-cyan-600 hover:bg-cyan-700 focus:bg-cyan-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
