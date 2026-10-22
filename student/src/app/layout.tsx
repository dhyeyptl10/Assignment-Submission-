import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Campus Directory — Student Academic Portal',
  description: 'University student directory with department listings, specialization tracks, and academic profiles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
