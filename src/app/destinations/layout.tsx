import WayfinderHeader from '@/components/wayfinder/Header';
import WayfinderFooter from '@/components/wayfinder/Footer';

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <WayfinderHeader />
      <main className="flex-1">{children}</main>
      <WayfinderFooter />
    </div>
  );
}
