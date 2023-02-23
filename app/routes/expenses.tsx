// Expenses shared layout

import { ActionArgs, redirect } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import ExpenseList from '~/components/ExpenseList';

export default function ExpensesLayout() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center px-5 py-5">
      <h2 className="font-bold leading-tight text-3xl mt-0 mb-2 text-cyan-500">
        Expenses Shared Layout
      </h2>
      <Outlet />
      <ExpenseList />
    </div>
  );
}
