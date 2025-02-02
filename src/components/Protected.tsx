import { Navigate } from "react-router-dom";

const start_date = import.meta.env.VITE_START_DATE;

export default function Protected({ children }: { children: React.ReactNode }) {
  return new Date(start_date) < new Date() ? (
    <>{children}</>
  ) : (
    <Navigate to="/" replace={true} />
  );
}
