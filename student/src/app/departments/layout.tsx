import CampusHeader from '@/components/CampusHeader';
import CampusFooter from '@/components/CampusFooter';

export default function DepartmentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <CampusHeader />
      <main className="flex-1">{children}</main>
      <CampusFooter />
    </div>
  );
}
