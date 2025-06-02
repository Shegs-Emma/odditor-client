import Footer from "@/components/navigation/Footer";
import MobileFooter from "@/components/navigation/Footer/mobile-footer";
import Navbar from "@/components/navigation/Navbar";
import Landing from "@/components/pages/Landing";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Landing />
      <Footer />
      <MobileFooter />
    </div>
  );
}
