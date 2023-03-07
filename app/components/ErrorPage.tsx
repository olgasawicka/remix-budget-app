import type { FC, ReactElement, ReactFragment, ReactNode } from 'react';
import { ErrorIcon } from './Icons';

type ErrorPageProps = {
  title: string;
  children: ReactElement | ReactFragment | ReactNode;
};

const ErrorPage: FC<ErrorPageProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <span className="pr-4">{ErrorIcon}</span>
        <h1 className="font-semibold text-2xl">{title}</h1>
      </div>
      <div className="mt-10 text-center text-xl">{children}</div>
    </div>
  );
};

export default ErrorPage;
