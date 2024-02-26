import Image from "next/image";
import Navbar from "../components/Navbar";
//import Para from '../components/Para'
import Footer from "../components/Footer";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <div className="relitive ">
      <div className="absolute w-screen -z-10">
        <Image width={1000} height={1000} src={"/maingun.jpg"} className="w-screen opacity-85"></Image>
      </div>
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>
  );
}
