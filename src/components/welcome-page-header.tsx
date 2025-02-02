import { Button } from "@components/ui/button";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function WelcomePageHeader() {
  return (
    <header className="w-full bg-white shadow-sm dark:bg-[var(--background)]">
      <div
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-end gap-2 px-6 py-2",
        )}
      >
        <Link to="/" className="text-lg font-bold">
          <Button variant="outline">Home</Button>
        </Link>
        <Link to="/domains" className="text-lg font-bold">
          <Button variant="outline">Domains</Button>
        </Link>
        <Link to="/challenges" className="text-lg font-bold">
          <Button variant="outline">Challenges</Button>
        </Link>
      </div>
    </header>
  );
}
