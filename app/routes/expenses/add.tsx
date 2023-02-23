import { Form } from '@remix-run/react';
import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

export default function AddExpense() {
  const [expenseDate, setExpenseDate] = useState({
    startDate: null,
    endDate: null,
  });

  const expenseDateHandler = (newDate: any) => {
    setExpenseDate(newDate);
  };

  return (
    <Form
      method="post"
      className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-stone-200 flex flex-col justify-center"
    >
      <h2 className="font-bold text-2xl text-gray-800 mb-8 text-center">
        Add new expense
      </h2>
      <div>
        <div className="flex-col w-full mb-5">
          <label
            htmlFor="name"
            className="text-gray-700 inline-block text-sm font-semibold px-1 py-2"
          >
            Name
          </label>
          <input
            type="text"
            className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500"
            id="name"
            required
            name="name"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label
            htmlFor="descr"
            className="text-gray-700 inline-block text-sm font-semibold px-1 py-2"
          >
            Description
          </label>
          <textarea
            className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500"
            id="descr"
            name="descr"
            rows={5}
            maxLength={200}
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label
            htmlFor="amount"
            className="text-gray-700 inline-block text-sm font-semibold px-1 py-2"
          >
            Amout paid
          </label>
          <input
            type="number"
            className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500"
            id="amount"
            name="amount"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label
            htmlFor="expenseDate"
            className="text-gray-700 inline-block text-sm font-semibold px-1 py-2"
          >
            Expense date
          </label>
          <Datepicker
            asSingle={true}
            value={expenseDate}
            useRange={false}
            onChange={expenseDateHandler}
            inputName="expenseDate"
            inputClassName="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500"
          />
        </div>

        <div className="flex flex-col w-full mb-5">
          <label
            htmlFor="fileInput"
            className="text-gray-700 inline-block text-sm font-semibold px-1 py-2"
          >
            Upload file
          </label>
          <input
            type="file"
            className="mx-auto w-full bg-stone-200 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyan-500"
            id="fileInput"
            name="fileInput"
            multiple
            accept="image/*,.pdf"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <button
            type="submit"
            className=" text-center flex center w-full max-w-xs mx-auto bg-cyan-600 hover:bg-cyan-700 focus:bg-cyan-700 text-white rounded-lg px-3 py-3 font-semibold"
          >
            Add expense
          </button>
        </div>
      </div>
    </Form>
  );
}
