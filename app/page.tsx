import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Departments from "@/components/home/Departments";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <Stats />
      <Departments />
    </main>
  );
}
