import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import styles from './styles/tailwind.css';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';
import Nav from './components/Nav';
import ErrorPage from './components/ErrorPage';
import Section from './components/Section';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Budget App',
  viewport: 'width=device-width,initial-scale=1',
});

function Document({
  title,
  children,
}: {
  title?: string;
  children: ReactElement;
}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-900 text-slate-100">
        <header className="pt-10">
          <Nav />
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document title="Remix Budget App">
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caughtResponse = useCatch();
  return (
    <Document title={caughtResponse.statusText}>
      <ErrorPage title={caughtResponse.statusText}>
        <>
          {caughtResponse.data?.message || 'Something went wrong'}
          <div>
            <Link to="/">Back to homepage</Link>
          </div>
        </>
      </ErrorPage>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title={'An error occured'}>
      <Section>
        <ErrorPage title={'An error occured'}>
          {error.message || 'Something went wrong. Please try again later.'}
        </ErrorPage>
      </Section>
    </Document>
  );
}

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];
