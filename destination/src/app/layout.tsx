import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wayfinder — Travel Destination Explorer',
  description:
    'A cartographic travel portal for discovering global destinations, regional divisions, and planning itineraries with Next.js App Router.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0B0F19] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
