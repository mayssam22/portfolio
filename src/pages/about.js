import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef,useState } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/mine.JPG";
import { useMotionValue,useSpring,useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import useLanguage from "@/components/hooks/useLanguage";

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{ duration:3000 });
    const isInView = useInView(ref,{once:true});
    useEffect(()=>{
        if(isInView){
             motionValue.set(value)
        }
    },[isInView,value,motionValue]);
    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        });
    });
    return <span ref={ref}></span>
}

const An = () =>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{ duration:3000 });
    const isInView = useInView(ref,{once:true});
    const [recordCount, setRecordCount] = useState(0);

    useEffect(() => {
      // Fetch the count of records from your API route
      fetch('/api/countAllRecords')
        .then((response) => response.json())
        .then((data) => {
          setRecordCount(data.count);
        })
        .catch((error) => {
          console.error('Error fetching record count:', error);
        });
    }, []);
    useEffect(()=>{
        if(isInView){
             motionValue.set(recordCount)
        }
    },[isInView,recordCount,motionValue]);
    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0) <= recordCount){
                ref.current.textContent = latest.toFixed(0);
            }
        });
    });
    return <span ref={ref}></span>
}

const about = () =>{
    const [modi,setModi] = useLanguage();
    return(
    <>
        <Head>
            <title>MH My.Portfolio | {modi==="en" ? "About Page" : "Page À propos"} </title>
            <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
            <AnimatedText text={modi==="en" ? "Passion Fuels Purpose!" : "La Passion Nourrit Le But !"} className="mb-16 lg:!text-7xl sm:!text--6xl xs:!text-4xl sm:mb-8"/>
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">   
                <div className="col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8">
                    <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">{modi==="en" ? "Biography" : "Biographie"}</h2>
                    <p className="font-medium">

                        {modi==="en" ? `Hi, I'm Mayssam, a Full Stack Developer with ${new Date().getFullYear()-2019}+ of hands-on experience 
                        designing, and implementing applications and solutions using a range of technologies and programming languages. 
                        Seeking to leverage broad developement experience and hands-on technical expertise in a challenging role as a Full 
                        Stack Developer.` : `Bonjour, je m'appelle Mayssam, un développeur Full Stack avec plus de ${new Date().getFullYear()-2019}+ d'expérience pratique 
                        dans la conception et la mise en œuvre d'applications et de solutions utilisant une gamme de technologies et de 
                        langages de programmation. Cherchant à tirer parti d'une vaste expérience de développement et d'une expertise 
                        technique pratique dans un rôle stimulant en tant que développeur Full Stack.`}

                    </p>
                    <p className="my-4 font-medium">
                    {modi==="en" ? `I'm a quick self-learner who can add to my stack whatever skills that your company or project may require,
                    besides I can assimilate new ideas efficiently to your futur projects. 
                    I followed various internships and training courses during my university studies.` : `Je suis un autodidacte 
                    rapide qui peut ajouter à mon bagage toutes les compétences que votre entreprise ou votre projet peut nécessiter, 
                    en plus je peux assimiler efficacement de nouvelles idées à vos futurs projets. J'ai suivi divers stages et 
                    formations durant mes études universitaires.`}
                    </p>
                    <p className="font-medium">
                        {modi==="en" ? `Whether I'm working on a web app, mobile app, or 
                    other digital product, I bring my commitment to develope whatever user-centered thinking to 
                    every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.` 
                    : `Que je travaille sur des apps Web, des apps mobile ou
                    autre produit numérique, j'apporte mon engagement à développer une réflexion centrée sur 
                    l'utilisateur dans chaque projet sur lequel je travaille. J'attends avec impatience l'opportunité 
                    d'apporter mes compétences et ma passion à votre prochain projet.`}

                    </p>
                </div> 
                <div className={modi==="en" ? "col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
                 : "col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"}>
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                    <Image src={profilePic} alt="My.Portofolio" className={modi==="en" ? "w-full h-auto rounded-2xl" : "w-full h-full rounded-2xl"}
                    priority
                    sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw'
                    />
                </div>
                <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                            <An />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:-sm">{modi==="en" ? "Satisfied Clients" : "Clients satisfaits"}</h2>
                    </div>
                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                             <AnimatedNumbers value={6}/>+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:-sm">{modi==="en" ? "Projects Completed" : "Projets Complets"}</h2>
                    </div>
                    <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                              <AnimatedNumbers value={new Date().getFullYear()-2019}/>+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:-sm">{modi==="en" ? "Years of Experience" : "Années D'expérience"}</h2>
                    </div>
                </div>
            </div>
            <Skills />
            <Experience />
            <Education />
            </Layout>
        </main>
    </>
    );
}

export default about ;