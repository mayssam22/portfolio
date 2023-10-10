import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {motion, useMotionValue} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import useLanguage from "@/components/hooks/useLanguage";


const FramerImage = motion(Image);

const MovingImage = ({title}) => {
    return(
    <a  target="_blanc">
        <h2 className=" capitalize text-xl font-semibold hover:underline">{title}</h2>
    </a>
    )

}


const Article = ({img,title,date,link}) =>{
  const [timeSpent, setTimeSpent] = useState(0);
  const [modi,setModi] = useLanguage();

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - startTime) / 60000; // Convert milliseconds to minutes
      setTimeSpent(Math.floor(elapsedTime));
    }, 60000); // Update every second

    return () => clearInterval(interval);
  }, []);
      return(
        <motion.li
        initial={{y:200}}
        whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}}
         className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark first:mt-0
         border border-solid border-dark dark:border-light border-r-4 border-b-4 dark:text-light sm:flex-col">
            <MovingImage title={title} img={img} link={link} />
            <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
            <span className="text-primary dark:text-primaryDark font-semibold">{timeSpent} {modi==="en" ? "min of read." : "min de lecture."}</span>
        </motion.li>
      )
}

const Articles = () => {
  const [modi,setModi] = useLanguage();
    return(
        <>
        <Head>
            <title>MH My.Portfolio | {modi==="en" ? "Training Page" : "Page De Formation"}</title>
            <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text={modi==="en" ? "Words Can Change The World!" : "Les Mots Peuvent Changer Le Monde !"} className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">{modi==="en" ? "All Training" : "Tous les Formations"}</h2>
                <ul>
                    <Article
                      title={modi==="en" ? 
                      "English training, obtaining the British Council certificate in September 2021 with a fairly good grade." : 
                      "Formation anglais, obtention du certificat British Council en septembre 2021 avec la mention assez bien."}
                      date={modi==="en" ? "sep, 2021" : "sep, 2021"}
                    />
                    <Article
                      title={modi==="en" ? 
                      "Angular training for the Frontend and Spring Boot for the Backend with Udemy to develop an e-commerce web application." : 
                      "Formation Angular pour le Frontend et Spring Boot pour le Backend avec Udemy afin de développer une application web d’e-commerce."}
                      date={modi==="en" ? "decem, 2022" : "décem, 2022"}
                    />
                    <Article
                      title={modi==="en" ? 
                      "Certified in CCNA1 (Cisco Certified Network Associate 1)." : 
                      "Certifié en CCNA1 (Cisco Certified Network Associate 1)."}
                      date={modi==="en" ? "March 22, 2023" : "2023"}
                    />
                    <Article
                      title={modi==="en" ? 
                      "Certified in CCNA2 (Cisco Certified Network Associate 2)." : 
                      "Certifié en CCNA2 (Cisco Certified Network Associate 2)."}
                      date={modi==="en" ? "2023" : "2023"}
                    />
                </ul>
            </Layout>
        </main>
        </>
    )
}
export default Articles ;