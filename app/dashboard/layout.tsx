import SideNav from "@/app/ui/dashboard/sidenav";

// Use this export in order to incrementaly adopt Partial Prerendering for specific routes
export const experimental_ppr = true;

// Main export\layout component
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
