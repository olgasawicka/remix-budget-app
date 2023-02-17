import { Outlet } from '@remix-run/react';

export default function IncomesLayout() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center px-5 py-5">
      <h2 className="font-bold leading-tight text-3xl mt-0 mb-2 text-cyan-500">
        Incomes Shared Layout
      </h2>
      <Outlet />
    </div>
  );
}
