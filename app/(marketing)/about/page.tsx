import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-semibold tracking-tight">About</h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            I build systems that ship. This platform exists to turn AI from
            content consumption into execution: structured workflows, copy-ready
            prompts, and deployment paths.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

