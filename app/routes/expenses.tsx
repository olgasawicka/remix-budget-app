import { Outlet } from '@remix-run/react';
import ExpenseList from '~/components/ExpenseList';
import Section from '~/components/Section';

export default function ExpensesLayout() {
  return (
    <Section>
      <div className="w-full flex flex-col items-center mt-10">
        <h2 className="font-semibold text-2xl text-slate-100">Expenses</h2>
        <Outlet />
        <ExpenseList />
      </div>
    </Section>
  );
}
