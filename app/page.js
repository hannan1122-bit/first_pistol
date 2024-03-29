import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Homedesc from "./components/Homedesc";
//import Para from '../components/Para'
export default function Home() {
  return (
    <div className="relitive ">
      <div className="absolute w-screen -z-10">
        <Image width={1000} height={1000} src={"/maingun.jpg"} className="w-screen opacity-85"></Image>
      </div>
      <Navbar/>
      <Homedesc/>
      <Footer/>
    </div>
  );
}
