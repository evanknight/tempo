import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="tw-min-h-screen tw-bg-light-primary tw-text-dark-primary">
      <main className="tw-container tw-mx-auto tw-p-4">{children}</main>
    </div>
  );
}
