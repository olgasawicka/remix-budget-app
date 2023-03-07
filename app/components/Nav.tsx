import { NavLink } from '@remix-run/react';
import type { FC } from 'react';

const Nav: FC = () => {
  return (
    <nav className="w-full px-10 py-6 flex justify-between ">
      <h1 className="text-3xl font-semibold">
        <NavLink to="/" className="p-6">
          Remix Budget
        </NavLink>
      </h1>
      <ul className="flex items-center">
        <li>
          <NavLink to="/expenses" className="p-6">
            Expenses
          </NavLink>
        </li>

        <li>
          <NavLink to="/incomes" className="p-6">
            Incomes
          </NavLink>
        </li>
        <li>
          <NavLink to="/authentication" className="p-6">
            Sign in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
