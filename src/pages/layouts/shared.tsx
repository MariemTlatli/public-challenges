import { Outlet } from "react-router-dom";
import WelcomePageHeader from "../../components/welcome-page-header";

export default function Shared() {
  return (
    <div className="min-h-full bg-slate-50 font-mulish dark:bg-[var(--background)]">
      <WelcomePageHeader />
      <Outlet />
    </div>
  );
}
