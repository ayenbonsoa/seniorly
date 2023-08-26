import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Guide from "@/components/guide";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Navbar />
      <Hero />
      <Services />
      <Guide />
    </main>
  )
}
