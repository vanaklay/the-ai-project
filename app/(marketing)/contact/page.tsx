import Navbar from "@/src/components/marketing/Navbar";
import Footer from "@/src/components/marketing/Footer";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Placeholder contact page. Add an email, a form, or a calendar link
            here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

