import CampusHeader from '@/components/campus/CampusHeader';
import CampusFooter from '@/components/campus/CampusFooter';

export default function CampusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <CampusHeader />
      <main className="flex-1">{children}</main>
      <CampusFooter />
    </div>
  );
}
