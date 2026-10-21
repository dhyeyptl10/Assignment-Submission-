import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js App Router Projects — Wayfinder & Campus Directory',
  description:
    'Comprehensive implementation of Next.js App Router featuring nested layouts, dynamic routes, catch-all routing, route groups, and loading/error states.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
