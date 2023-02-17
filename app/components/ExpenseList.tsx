import type { FC } from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';

const dummyData = [
  {
    id: 1,
    name: 'wczasy',
    descr: 'TUI - wycieczka na Zanzibar',
    amount: 18000,
    expenseDate: '2023-02-09',
  },
  {
    id: 2,
    name: 'Play-miesięczny abonament',
    descr: '',
    amount: 159,
    expenseDate: '2023-02-05',
  },
  {
    id: 3,
    name: 'UPC',
    descr: 'Internet za luty',
    amount: 69,
    expenseDate: '2023-02-02',
  },
  {
    id: 4,
    name: 'Zara',
    descr: 'Płaszcz',
    amount: 599,
    expenseDate: '2023-01-30',
  },
];

const ExpenseList: FC = () => {
  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {dummyData.map((expense) => (
                <tr className="text-gray-700" key={expense.id}>
                  <td className="px-4 py-3 text-ms font-semibold border">
                    {expense.name}
                  </td>
                  <td className="px-4 py-3 text-ms font-semibold border">
                    {!expense.descr ? '-' : expense.descr}
                  </td>
                  <td className="px-4 py-3 text-xs border">{expense.amount}</td>
                  <td className="px-4 py-3 text-xs border">
                    {expense.expenseDate}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    <Link to={expense.name}>
                      <EyeIcon />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ExpenseList;
