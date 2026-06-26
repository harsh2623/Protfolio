import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-[#050505] selection:bg-white selection:text-black">
      <div className="relative h-[400vh]">
        <ScrollyCanvas />
        <Overlay />
      </div>

      <About />
      <Projects />
    </main>
  );
}
