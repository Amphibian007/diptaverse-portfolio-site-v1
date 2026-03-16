import { CurrentFocus } from "@/sections/current-focus/CurrentFocus";
import { Hero } from "@/sections/hero/Hero";
import { HomeNavbar } from "@/sections/home/HomeNavbar";
import { SalesApproach } from "@/sections/sales-approach/SalesApproach";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeNavbar />
      <main>
        <Hero />
        <CurrentFocus />
        <SalesApproach />
      </main>
    </div>
  );
}
