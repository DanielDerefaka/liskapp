import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const Home: NextPage = () => {
  return (
    <main className='relative'>
    <Navbar />
    <section className='xl:padding-l wide:padding-r padding-b'>
<Hero/>
    </section>
        
       
    
    </main>
  );
};

export default Home;
