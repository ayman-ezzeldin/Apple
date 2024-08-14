import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="bg-black" >
      <Navbar />
      <Hero/>
      <Highlights/>
      <Modal/>
    </main>
  )
}