import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Preloader from "./components/preloader";
import Challenges from "./pages/challenges";
import Domains from "./pages/domains";
import HomePage from "./pages/home";
import LeaderboardPage from "./pages/leaderboard";

function App() {
  const location = useLocation();
  return (
    <>
      <Preloader />
      {/* <WelcomePageHeader /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/challenges/:domainId" element={<Challenges />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
